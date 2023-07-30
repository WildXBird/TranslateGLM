import { EventStreamParams, LLMEventStream, Role } from "../network/llm"

export type HistoryMessage = {
    text: string
    role: Role;
    time: Date | string
    type?: "network"
}

type Message = {
    role: Role;
    content: string;
}
//** 简单的以聊天模式调用llm */
export class LiteLLM {
    protected history: HistoryMessage[]
    private serverURL: URL;
    private SSE: LLMEventStream | undefined;
    constructor(url: URL, presetHistory?: HistoryMessage[]) {
        this.serverURL = url
        this.history = [...(presetHistory || [])]
    }
    public onThinking(message: HistoryMessage) { }

    private addMessage(message: string, role: Role, type?: HistoryMessage["type"]) {
        const thisMessage = { text: message, role, type, time: new Date() }
        this.history.push(thisMessage)
    }

    private continueAsk(message: string, hide: boolean, temperature?: number) {
        this.addMessage(message, "user")
        const realHistory: Message[] = []
        Array.from(this.history, item => {
            if (item.type === "network") {
            } else {
                realHistory.push({
                    "role": item.role,
                    "content": item.text
                })

            }
        })
        const param: EventStreamParams = {
            "model": "string",
            "messages": [
                ...realHistory,
            ],
            "temperature": temperature || 0.1,
            "top_p": 0.8,
            "stream": true
        }

        return new Promise<string>(async (resolve, reject) => {
            const SSE = new LLMEventStream(this.serverURL)
            this.SSE = SSE
            SSE.onChange = (event) => {
                if (event.finished) {
                    resolve(event.text)
                    if (!hide) {
                        this.addMessage(event.text, "assistant")
                    } else {
                        this.history.pop()
                    }
                } else {
                    this.onThinking({
                        "role": "assistant",
                        "text": event.text,
                        "time": new Date()
                    })
                }

            }
            SSE.send(param)
        })


    }
    /** 发送一条新消息给llm，之前的context也会被保留 */
    async exec(str: string, hide: boolean, temperature: number) {
        const data = await this.continueAsk(str, hide, temperature)
        return data
    }
    /** 中断正在进行的生成 */
    async discontinue() {
        this.SSE?.terminate()
    }
}


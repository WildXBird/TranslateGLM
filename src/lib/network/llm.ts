export type Role = "user" | "system" | "assistant"

export type Message = {
	role: Role;
	content: string;
}
export type EventStreamParams = {
	"model": string
	"messages": Message[]
	"temperature": number
	"top_p"?: number
	"max_length"?: number
	"stream": true
}
export type EventStreamProgressEvent = {
	finished: boolean;
	text: string;
}

export class LLMEventStream {
	private readonly url: URL
	private readonly xhr: XMLHttpRequest;
	private finished: boolean
	private terminated: boolean
	constructor(serverURL: URL) {
		this.url = serverURL
		this.xhr = new XMLHttpRequest();
		this.finished = false
		this.terminated = false
	}

	public async send(param: EventStreamParams) {
		this.xhr.open('POST', this.url.href);
		this.xhr.setRequestHeader("content-type", "application/json")
		this.xhr.send(JSON.stringify(param));
		this.xhr.onreadystatechange = () => {
			if (this.xhr.readyState === 4) {
				const result = this.parseResponseText(this.xhr.responseText, true)

				if (this.xhr.status === 200) {
					if (!this.finished) {
						if (result.finished) { this.finished = true }
						this.onChange(result)
					}
				} else {
					if (!this.finished) {
						this.finished = true
						if (this.terminated) {
							this.onChange(result)
						} else {
							debugger
							console.log(this.xhr)
							this.onChange({
								finished: true,
								text: "SERVER_ERROR"
							})
						}

					}


				}
			}
		};
		this.xhr.onprogress = (event) => {
			const result = this.parseResponseText(this.xhr.responseText)
			if (!this.finished) {
				if (result.finished) { this.finished = true }
				this.onChange(result)
			}
		}
	}
	public async terminate() {
		this.terminated = true
		console.debug("sse terminated")
		
		if(this.xhr.status !==this.xhr.DONE){
			this.xhr.abort()
		}
	}
	private parseResponseText(responseText: string, forceStop?: boolean): EventStreamProgressEvent {
		const lines = responseText.split("\n")
		const totalMessageTexts: string[] = []
		let finished = false
		let lastDeltaText = ""
		for (let line of lines) {
			if (line.length > 50) {
				try {
					const jsonText = line.replace("data:", "").trim()
					const json = JSON.parse(jsonText)
					const deltaObject = json.choices[0].delta
					const finishReason = json.choices[0].finish_reason
					if (deltaObject && Object.keys(deltaObject).length > 0 && "content" in deltaObject) {
						const deltaText = deltaObject.content
						lastDeltaText = deltaText
						totalMessageTexts.push(deltaText)
					}

					if (finishReason === "stop") {
						finished = true
					}
				} catch (error) {
					console.error("ERR@parseResponseText", error)
					continue
				}
			}
		}
		const result = {
			finished: forceStop ? forceStop : finished,
			text: totalMessageTexts.join("")
		}
		return result
	}
	onChange(event: EventStreamProgressEvent) { }

}

import React, { } from 'react';
import './style.css';
import { Button, Col, Input, Popover, Radio, Row } from 'antd';
import { LoadingOutlined, } from '@ant-design/icons';
import { Select } from 'antd';
import { Typography } from 'antd';
import { HistoryMessage, LiteLLM } from '../../lib/llms/lite';
import { sentenceSplit } from '../../component/SplitSentence';
import { Language, detectLanguage } from '../../component/LanguageDetect';

const { Title } = Typography;
const { TextArea } = Input;


type State = {
	thinking: boolean
	thinkingMessage: string
	inputValue: string
	temperature: number
	translations: [text: string, raw: string][]
}

export class Home extends React.PureComponent<{}, State> {
	llmServer: URL
	llm: LiteLLM
	debounceTimer: NodeJS.Timeout | undefined
	randomTag: string | number | undefined
	constructor(props: {}) {
		super(props);
		this.state = {
			thinking: false,
			thinkingMessage: "",
			inputValue: "飙酷车神：轰鸣盛典",
			translations: [],
			temperature: 0.1
		};
		this.llmServer = new URL("http://127.0.0.1:9188/v1/chat/completions")
		this.llm = new LiteLLM(this.llmServer)
	}
	render() {
		const BtnStyle: React.CSSProperties = {
			display: "inline-block",
			whiteSpace: "pre-wrap",
			height: "auto",
			userSelect: "all",
			marginBottom: 4,
			textAlign: "left",
		}
		return (
			<div style={{ width: "100%", color: `#333333`, textAlign: "center" }}>
				<div style={{ width: 1200, maxWidth: "100%", display: "inline-block" }}>
					<Row>
						<Col span={24}>
							<Title>{"TranslateGLM"}</Title>
						</Col>
						<Col span={24}>{this.renderLanguageSelector()}</Col>
						<Col span={24}>{this.renderTemperatureSelector()}</Col>
						<Col span={12} style={{ padding: 12 }}>
							<TextArea
								id="inputTextarea"
								rows={4}
								autoSize={{ minRows: 8 }}
								size={"large"}
								onChange={() => { }} onInput={this.onInputChange.bind(this)} />
						</Col>
						<Col span={12} style={{ padding: 12 }}>
							<div style={{ textAlign: "left" }}>
								{Array.from(this.state.translations, (translation) => {
									if (translation[1] === "\n") {
										return <div />
									} else if (translation[0].length === 0) {
										debugger
									}
									return <Popover content={<div style={{ maxWidth: 800 }} >{translation[1]}</div>} title="原文">
										<div onPointerEnter={() => { this.highlight(translation[1]) }} style={{ display: "inline-block" }}>
											<Button style={{ ...BtnStyle }}>{translation[0]}</Button>
										</div>
									</Popover>
								})}
								{this.state.thinking ? <LoadingOutlined /> : ""}
							</div>
						</Col>
						<Col span={24}>
							<TextArea value={`Introduction
ChatGLM-6B is an open bilingual language model based on General Language Model (GLM) framework, with 6.2 billion parameters. With the quantization technique, users can deploy locally on consumer-grade graphics cards (only 6GB of GPU memory is required at the INT4 quantization level). Welcome to use the larger ChatGLM model on chatglm.cn

ChatGLM-6B uses technology similar to ChatGPT, optimized for Chinese QA and dialogue. The model is trained for about 1T tokens of Chinese and English corpus, supplemented by supervised fine-tuning, feedback bootstrap, and reinforcement learning wit human feedback. With only about 6.2 billion parameters, the model is able to generate answers that are in line with human preference.

In order to facilitate downstream developers to customize the model for their own application scenarios, we also implements an parameter-efficient tuning method based on P-Tuning v2(Guidelines). Tuning requires at least 7GB of GPU memory at INT4 quantization level.

ChatGLM-6B weights are completely open for academic research, and free commercial use is also allowed after completing the questionnaire.

Try the online demo on Huggingface Spaces.`} />
						</Col>
						<Col span={24}>
							<TextArea value={`ChatGLM-6B 是一个开源的、支持中英双语的对话语言模型，基于 General Language Model (GLM) 架构，具有 62 亿参数。结合模型量化技术，用户可以在消费级的显卡上进行本地部署（INT4 量化级别下最低只需 6GB 显存）。 ChatGLM-6B 使用了和 ChatGPT 相似的技术，针对中文问答和对话进行了优化。经过约 1T 标识符的中英双语训练，辅以监督微调、反馈自助、人类反馈强化学习等技术的加持，62 亿参数的 ChatGLM-6B 已经能生成相当符合人类偏好的回答，更多信息请参考我们的博客。欢迎通过 chatglm.cn 体验更大规模的 ChatGLM 模型。`} />
						</Col>

					</Row>

				</div>

			</div >
		);
	}
	renewLLM() {

	}
	renderTemperatureSelector() {
		const optionsWithDisabled = [
			{ value: 0.1, label: '基本' },
			{ value: 0.5, label: '不上不下' },
			{ value: 0.8, label: '发散' },
		];
		return <Radio.Group
			style={{ marginBottom: 14 }}
			options={optionsWithDisabled}
			onChange={(event) => {
				this.setState({ temperature: event.target.value })
			}}
			value={this.state.temperature}
			optionType="button"
			buttonStyle="solid"
		/>
	}
	renderLanguageSelector() {

		return <Select
			style={{ marginBottom: 14, width: 120 }}
			defaultValue="auto"
			onChange={() => { }}
			options={[
				//@ts-ignore
				{ value: 'auto', label: <>{"自动检测"}</> },
				// //@ts-ignore
				// { value: 'chn', label: <>{"中文 "}<CaretRightOutlined />{" 英文"}</> },
				// //@ts-ignore
				// { value: 'eng', label: <>{"英文 "}<CaretRightOutlined />{" 中文"}</> },
			]}
		/>
	}
	onInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		const value = event.target.value
		clearTimeout(this.debounceTimer)
		this.llm.discontinue()
		this.debounceTimer = setTimeout(async () => {
			this.llm.discontinue()
			const result = await this.translate(value, (translations) => {
				this.setState({ translations })
				this.forceUpdate()
			})
			if(result){
				this.setState({
					translations: result
				})
			}
		}, 400)
	}

	async translate(text: string, onChange: (text: [text: string, raw: string][]) => void) {
		const randomTag = Math.random()
		this.randomTag = randomTag
		const sourceLang = detectLanguage(text)
		let targetLang: Language
		switch (sourceLang) {
			case "chn":
				targetLang = "eng"
				break;
			case "eng":
				targetLang = "chn"
				break;

			default:
				targetLang = "oth"
				break;
		}
		console.log("targetLang", targetLang)
		const parts = sentenceSplit(text)
		const translations: [text: string, raw: string][] = []
		console.log("parts", parts)
		this.setState({ thinking: true })
		const presets: HistoryMessage[] = targetLang === "eng" ? [{
			"role": "user",
			"text": `☰☲☴香蕉是一种草本植物结出来的果实`,
			"time": new Date().toISOString()
		}, {
			"role": "assistant",
			"text": `Banana is the fruit of a herbaceous plant`,
			"time": new Date().toISOString()
		}] : [{
			"role": "user",
			"text": `☰☲☳Banana is the fruit of a herbaceous plant`,
			"time": new Date().toISOString()
		}, {
			"role": "assistant",
			"text": `香蕉是一种草本植物结出来的果实`,
			"time": new Date().toISOString()
		}]
		this.llm = new LiteLLM(this.llmServer, presets)


		for (let item of parts) {
			if (item === "\n") {
				translations.push([item, item])
				continue
			}
			if (item.trim().length === 0) { continue }

			if (targetLang === "oth") {
				translations.push([item, item])
				continue
			}
			const translation = await this.callLLM(this.llm, item, targetLang)
			{
				if (this.randomTag !== randomTag) {
					return
				}
			}
			console.warn(sourceLang, "input", item, "output", translation)
			translations.push([translation, item])
			onChange(translations)
		}
		this.setState({ thinking: false })

		console.log("translations", translations)
		return translations
		// debugger

	}

	async callLLM(llm: LiteLLM, text: string, to: Language) {
		const Prompt = (conent: string) => { return `${to === "eng" ? "☰☲☴" : "☰☲☳"}${conent}` }
		// const hide = text.length < 50
		const hide = false
		llm.discontinue()
		const data = await llm.exec(Prompt(text), hide, this.state.temperature)
		console.log("translate", text, data)
		return data
	}
	highlight(InputSearching: string) {
		debugger
		const InputTextarea = document.getElementById("inputTextarea") as HTMLTextAreaElement
		if (InputTextarea) {
			const textNode = InputTextarea.firstChild
			if (textNode) {
				const text = textNode.textContent
				if (text) {
					const searching = InputSearching.trim(),
						start = text.indexOf(searching)
					InputTextarea.focus();
					InputTextarea.setSelectionRange(start, start + searching.length)
				}
			}
		}
	}

}



export default Home;

你好，你的项目很有趣，我很乐意为你写一个readme。以下是我写的一个简单的模板，你可以根据自己的需要进行修改：

# TranslateGLM

TranslateGLM 是一个基于 ChatGLM2-6B 模型微调的中英文翻译器，可以实现高质量的双向翻译。

使用183万参数进行了 [P-Tuning v2](https://github.com/THUDM/P-tuning-v2) 的微调，微调的样本的格式可以参考 validation_file.txt 中的内容。

微调过后的模型，在可以很好的充当翻译器的同时仍然可以正常的进行聊天对话。

ChatGLM2-6B 是一个开源的、支持中英问答的对话语言模型，基于 General Language Model (GLM) 架构，具有约 60 亿参数。

## 功能

- 支持中文和英文之间的双向翻译
- 支持OpenAI格式的API和网页端的交互式翻译
- 支持调整输出结果随机度
- 支持翻译结果和原文对照查看
- 正常对话（仅限使用OpenAI格式的API）

## 安装

要运行本项目，你需要安装以下软件依赖：

```
yarn
cd ./glm
pip install -r requirements.txt
pip install rouge_chinese nltk jieba datasets
```

## 使用

### 启动翻译器

你可以通过如下命令启动翻译器的OpenAI格式的API：

```
python ./glm/openai_api.py
```

你可以通过如下命令启动翻译器的前端UI：
启动UI前必须先启动上面的API

```
yarn start
```

在浏览器中访问 http://localhost:3000/ ，然后输入你想要翻译的文本即可自动翻译。

### 正常的进行聊天对话

你可以通过如下命令启动传统的web demo对话，但只能进行普通对话：

```
python ./glm/web_demo.py
```

你可以通过如上面的“OpenAI格式的API”进行正常对话，使用方式和普通的调用方法无异：

```
python web_demo.py
```


## 翻译UI

翻译UI暂时不支持指定输入语言，输入的语言的自动判断是中文还是英文，然后自动翻译成另一种语言。

翻译UI可以指定翻译结果的随机性，分为基本、不上不下和发散。

基本在在绝大多数情况下准确执行翻译任务而不输出额外的内容。

发散可以更好的理解文本内涵，但有概率错误的把翻译当成对话进行回复。

不上不下介于两者之间。

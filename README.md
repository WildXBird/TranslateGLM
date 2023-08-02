# TranslateGLM

TranslateGLM 是一个基于 ChatGLM2-6B 模型微调的中英文翻译器，可以实现高质量的双向翻译。

使用183万参数进行了 [P-Tuning v2](https://github.com/THUDM/P-tuning-v2) 的微调，微调的样本的格式可以参考 [validation_file.txt](https://github.com/WildXBird/TranslateGLM/blob/main/validation_file.txt) 中的内容。

微调过后的模型，在可以很好的充当翻译器的同时仍然可以正常的进行聊天对话。

ChatGLM2-6B 是一个开源的、支持中英问答的对话语言模型，基于 General Language Model (GLM) 架构，具有约 60 亿参数。

![图片](https://github.com/WildXBird/TranslateGLM/blob/main/0.png?raw=true)

![图片](https://github.com/WildXBird/TranslateGLM/blob/main/1.png?raw=true)

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
*启动UI前必须先启动上面的API*

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
python ./glm/openai_api.py
```

## 翻译UI

翻译UI暂时不支持指定输入语言，输入的语言的自动判断是中文还是英文，然后自动翻译成另一种语言。

翻译UI可以指定翻译结果的随机性，分为**保守**、**平衡**、**灵活**和**发散**。

分别代表着temperature从低(保守)到高(创意)，对于较复杂的语法，更高的temperature更能准确的翻译，但也可能导致他误解某些含义。

把鼠标悬停在翻译结果上，可以查看翻译的原文以及原文在输入中的位置。

## 更新

**2023-8-2 (alpha-2)**

1. 加入了短篇新闻的对照翻译样本进行了重新训练。
2. 经过简单测试发现在丢失信息方面有了显著的改善，即原文中的某些描述或者修饰在翻译的结果中会被无视，在句子稍长的情况下尤为明显。
3. 在“发散”下，可能会把翻译当成对话进行回答的问题（例如某个句子以：结尾），经过简单测试发现有了显著的改善。
4. 考虑到 “3”的问题改善了，在随机性选项改成了4个。


## 已知问题

1. 中英文数字表达转换存在错误(非常常见)
2. 会出现英文中文互相穿插(罕见)
3. 会出现完全无关的翻译结果(罕见)
4. 原文中的某段描述或者某些修饰在翻译的结果中会被无视(常见)

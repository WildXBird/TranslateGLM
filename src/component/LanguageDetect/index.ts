export type Language = "chn" | "eng" | "oth"

// 定义一个函数，接受一个字符串参数
export function detectLanguage(text: string): Language {
    // 如果参数为空或者不是字符串，返回"无效输入"
    if (!text || typeof text !== "string") {
        return "oth";
    }
    // 定义一个正则表达式，匹配中文字符
    var chineseRegex = /[\u4e00-\u9fa5]/;
    // 定义一个正则表达式，匹配英文字符
    var englishRegex = /[a-zA-Z]/;
    // 定义一个变量，记录中文字符的个数
    var chineseCount = 0;
    // 定义一个变量，记录英文字符的个数
    var englishCount = 0;
    // 遍历字符串中的每个字符
    for (var i = 0; i < text.length; i++) {
        // 获取当前字符
        var char = text[i];
        // 如果当前字符匹配中文正则，增加中文计数
        if (chineseRegex.test(char)) {
            chineseCount++;
        }
        // 如果当前字符匹配英文正则，增加英文计数
        if (englishRegex.test(char)) {
            englishCount++;
        }
    }
    // 如果中文计数和英文计数都为零，返回"无有效文字"
    if (chineseCount === 0 && englishCount === 0) {
        return "oth";
    }
    // 只要包含中文就算中文
    if (chineseCount > 0) {
        return "chn";
    }
    return "eng";

}

import { detectLanguage } from "../LanguageDetect"


export const sentenceSplit = (str: string,): string[] => {
    // const paragraphs = str.split("\n")
    let sentences: string[] = []

    // for (let paragraph of paragraphs) {
    //     sentences.push(paragraph)
    //     sentences.push("\n")
    // }

    const invalidSymbols: string[] = []
    const splitments = ["。", "：", ". ", "\n"]
    let splits: string[] = [str]
    {
        let splitment: string | undefined; // 在循环外部声明
        while (splitment = splitments.pop()) {
            if (splitment) {
                const nextSplits: string[] = []
                for (let item of splits) {
                    const temp = item.split(splitment)
                    for (let testId in temp) {
                        const tests = temp[testId]
                        if (temp.length > 1 && testId !== String(temp.length - 1)) {
                            nextSplits.push(`${tests}${splitment}`)
                            // console.log("tests", String(tests))
                            // console.log("nextSplits", nextSplits)
                            // console.log("temp", splitment)
                            // console.log("pop", nextSplits[nextSplits.length-1])
                            // debugger

                        } else {
                            nextSplits.push(`${tests}`)
                        }
                    }
                }
                splits = nextSplits
            }
        }
    }

    // debugger
    sentences = Array.from(splits, split => {
        let test = split.trim()
        for (let splitment of [...invalidSymbols, ...splitments]) {
            test = test.replaceAll(splitment, "")
        }
        if (test.trim().length === 0) {
            return ""
        }
        const sourceLang = detectLanguage(test)


        if (sourceLang === "oth") {
            return ""

        }

        return split
    })
    // debugger
    //     let result = [];
    //     let start = 0;
    //     for (let i = 0; i < str.length; i++) {
    //         let index = separator.indexOf(str[i]);
    //         if (index != -1) {
    //             const content = str.slice(start, i)
    //             result.push(`${content}${str[i]}`);
    //             start = i + 1;
    //         }
    //     }
    //     result.push(str.slice(start));
    //     sentences = [...sentences, ...result]

    return sentences
}


// sentenceSplit(` 《奔跑吧！兄dei二》机电产品进出口商会汽车分会的杨振恒秘书长认为，这个“摩托车分会”的成立是有好处的，不仅可以更好地为企业服务，还能让更多的企业有机会关心行业的共同发展。杨秘书长透露，得到有关上级主管部门的批准后，“摩托车分会”将有可能在今年年内成立，会长将通过选举，由主营企业的企业家来担任。我说：“很好！一起搞！”我拿起了《asdfa》，开始阅读。
// Tesla continues to rank above average, but satisfaction is declining. The company earned a score of 878, making it one of the higher-performing brands in the industry. However, Tesla’s score in 2023 is nine points lower than a year ago, when the company was first included in the study. And satisfaction scores for Tesla are trending downward year over year in all 10 factors. The company isn’t eligible for JD Power’s award ranking because it doesn’t give JD Power access to owner information in the states where that permission is required by law.`);



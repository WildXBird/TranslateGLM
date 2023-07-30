
import { commondSimple, commondFunctionSimple } from "./data"


// for (let item of commondSimple) {
//     item.command.replace(`console.log`, "return ")
//     console.log = (...arg) => {
//         console.error(...arg)
//     }
//     const result = eval(item.command)

//     console.warn("result", item.command, result)
// }

export const Shuffle1 = <A extends any = any>(arr:A[] ):A[]=> {
    let res = [], random
    while (arr.length > 0) {
        random = parseInt(String(Math.random() * arr.length))
        res.push(arr.splice(random, 1)[0])
        
    }
    return res
}
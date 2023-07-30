export const commondSimple = [
    {
        "command": "console.log('Hello, world!');",
        "description": "打印Hello, world!"
    },
    {
        "command": "let x = 5; console.log(x * 2);",
        "description": "定义变量x并打印其两倍的值"
    },
    {
        "command": "console.error('This is an error.');",
        "description": "输出一个错误消息"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.length);",
        "description": "定义一个数组并打印其长度"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(obj.name);",
        "description": "定义一个对象并打印其中的属性"
    },
    {
        "command": "let num = 10; console.log(num.toString());",
        "description": "将数字转换为字符串并打印"
    },
    {
        "command": "console.warn('Warning: Something is not right.');",
        "description": "输出一个警告消息"
    },
    {
        "command": "let str = 'Hello'; console.log(str.toUpperCase());",
        "description": "将字符串转换为大写并打印"
    },
    {
        "command": "let result = 10 > 5; console.log(result);",
        "description": "比较两个数字并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr[0]);",
        "description": "访问数组中的第一个元素并打印"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.keys(obj));",
        "description": "打印对象的所有键"
    },
    {
        "command": "let str = 'Hello, world!'; console.log(str.length);",
        "description": "打印字符串的长度"
    },
    {
        "command": "let result = 10 === '10'; console.log(result);",
        "description": "比较一个数字和字符串是否相等并打印结果"
    },
    {
        "command": "let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; let merged = [...arr1, ...arr2]; console.log(merged);",
        "description": "合并两个数组并打印结果"
    },
    {
        "command": "let obj1 = {name: 'John'}; let obj2 = {age: 25}; let merged = {...obj1, ...obj2}; console.log(merged);",
        "description": "合并两个对象并打印结果"
    },
    {
        "command": "let num = 3.14159; console.log(num.toFixed(2));",
        "description": "将数字保留两位小数并打印"
    },
    {
        "command": "let str = 'Hello'; console.log(str.charAt(0));",
        "description": "访问字符串的第一个字符并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.push(4); console.log(arr);",
        "description": "向数组末尾添加一个元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; delete obj.age; console.log(obj);",
        "description": "删除对象的一个属性并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split(''));",
        "description": "将字符串拆分为字符数组并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.pop(); console.log(arr);",
        "description": "从数组末尾移除一个元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.values(obj));",
        "description": "打印对象的所有值"
    },
    {
        "command": "let str = 'Hello'; console.log(str.substring(0, 3));",
        "description": "获取字符串的子串并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.unshift(0); console.log(arr);",
        "description": "向数组开头添加一个元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.entries(obj));",
        "description": "打印对象的所有键值对"
    },
    {
        "command": "let str = 'Hello'; console.log(str.indexOf('l'));",
        "description": "查找字符串中某个字符的索引并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.shift(); console.log(arr);",
        "description": "从数组开头移除一个元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(JSON.stringify(obj));",
        "description": "将对象转换为JSON字符串并打印"
    },
    {
        "command": "let str = 'Hello'; console.log(str.includes('llo'));",
        "description": "检查字符串是否包含某个子串并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.reverse());",
        "description": "反转数组并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.getOwnPropertyNames(obj));",
        "description": "打印对象的所有属性名称"
    },
    {
        "command": "let str = 'Hello'; console.log(str.replace('H', 'J'));",
        "description": "将字符串中的某个字符替换为另一个字符并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.slice(1, 3));",
        "description": "获取数组的子数组并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.getOwnPropertyDescriptor(obj, 'name'));",
        "description": "获取对象属性的描述符并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.toLowerCase());",
        "description": "将字符串转换为小写并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.join('-'));",
        "description": "将数组元素连接为字符串并打印"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.getPrototypeOf(obj));",
        "description": "获取对象的原型并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.trim());",
        "description": "去除字符串两端的空白字符并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.indexOf(2));",
        "description": "查找数组中某个元素的索引并打印"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.isFrozen(obj));",
        "description": "检查对象是否被冻结并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.charAt(str.length - 1));",
        "description": "访问字符串的最后一个字符并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.includes(2));",
        "description": "检查数组是否包含某个元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.isSealed(obj));",
        "description": "检查对象是否被封闭并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').reverse().join(''));",
        "description": "将字符串反转并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.splice(1, 1); console.log(arr);",
        "description": "从数组中删除一个元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.isExtensible(obj));",
        "description": "检查对象是否可扩展并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').sort().join(''));",
        "description": "对字符串进行排序并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.splice(1, 0, 4); console.log(arr);",
        "description": "向数组中插入一个元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.isPrototypeOf(obj));",
        "description": "检查对象是否是另一个对象的原型并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('l').join(''));",
        "description": "从字符串中移除某个子串并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.sort(); console.log(arr);",
        "description": "对数组进行排序并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.getOwnPropertyDescriptors(obj));",
        "description": "获取对象的所有属性描述符并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.concat(' world!'));",
        "description": "将字符串连接到另一个字符串并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.fill(0); console.log(arr);",
        "description": "用指定的值填充数组并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.getOwnPropertySymbols(obj));",
        "description": "获取对象的所有Symbol属性并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.repeat(3));",
        "description": "重复字符串多次并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.reverse(); console.log(arr);",
        "description": "反转数组元素的顺序并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.keys(obj).length);",
        "description": "获取对象的属性数量并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.substr(1, 3));",
        "description": "从字符串中提取子串并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.sort((a, b) => b - a); console.log(arr);",
        "description": "以降序对数组进行排序并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.values(obj).length);",
        "description": "获取对象的值的数量并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.charAt(str.length - 1) + str.charAt(0));",
        "description": "打印字符串的首尾字符"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.map(num => num * 2));",
        "description": "将数组中的每个元素都乘以2并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(JSON.parse(JSON.stringify(obj)));",
        "description": "将对象进行深拷贝并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').map(char => char.charCodeAt(0)));",
        "description": "将字符串转换为字符编码数组并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.filter(num => num % 2 === 0));",
        "description": "过滤数组中的偶数并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.keys(obj).map(key => obj[key]));",
        "description": "获取对象的所有值并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').reverse().join('').toUpperCase());",
        "description": "将字符串反转、转换为大写并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.reduce((sum, num) => sum + num, 0));",
        "description": "计算数组中所有元素的总和并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.entries(obj).reduce((result, [key, value]) => ({...result, [value]: key}), {}));",
        "description": "交换对象的键和值并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').reduce((result, char) => result + char.charCodeAt(0), 0));",
        "description": "计算字符串中所有字符的字符编码总和并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.every(num => num > 0));",
        "description": "检查数组中的所有元素是否大于0并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.values(obj).every(value => typeof value === 'string'));",
        "description": "检查对象的所有值是否都是字符串并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').some(char => char === 'l'));",
        "description": "检查字符串中是否存在字符'l'并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.some(num => num > 5));",
        "description": "检查数组中是否存在大于5的元素并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.keys(obj).some(key => key === 'age'));",
        "description": "检查对象的所有键中是否存在'age'并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').filter(char => char === 'l').length);",
        "description": "计算字符串中字符'l'的个数并打印结果"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.filter(num => num > 1).length);",
        "description": "计算数组中大于1的元素个数并打印结果"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.values(obj).filter(value => typeof value === 'string').length);",
        "description": "计算对象中值为字符串的属性个数并打印结果"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').find(char => char === 'l'));",
        "description": "查找字符串中第一个字符'l'并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.find(num => num > 1));",
        "description": "查找数组中第一个大于1的元素并打印"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.keys(obj).find(key => key === 'age'));",
        "description": "查找对象的第一个键为'age'的属性并打印"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').findIndex(char => char === 'l'));",
        "description": "查找字符'l'在字符串中的索引并打印"
    },
    {
        "command": "let arr = [1, 2, 3]; console.log(arr.findIndex(num => num > 1));",
        "description": "查找第一个大于1的元素在数组中的索引并打印"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; console.log(Object.keys(obj).findIndex(key => key === 'age'));",
        "description": "查找键为'age'的属性在对象中的索引并打印"
    },
    {
        "command": "let str = 'Hello'; console.log(str.split('').forEach(char => console.log(char)));",
        "description": "遍历字符串并打印每个字符"
    },
    {
        "command": "let arr = [1, 2, 3]; arr.forEach(num => console.log(num));",
        "description": "遍历数组并打印每个元素"
    },
    {
        "command": "let obj = {name: 'John', age: 25}; Object.keys(obj).forEach(key => console.log(obj[key]));",
        "description": "遍历对象的所有值并打印"
    }
]

//随机数
Array.from(new Array(12), i => {
    commondSimple.push({
        "command": "console.log(Math.random());",
        "description": "生成一个随机数并打印"
    })
})

export const commondFunctionSimple = [
    {
        "function": "sortArray",
        "description": "对数组进行排序",
        "code": "function sortArray(arr) {\n    let sortedArray = arr.sort((a, b) => a - b);\n    return JSON.stringify({\n        result: sortedArray\n    });\n}"
    },
    {
        "function": "calculateExponent",
        "description": "计算指数",
        "code": "function calculateExponent(base, exponent) {\n    let result = Math.pow(base, exponent);\n    return JSON.stringify({\n        result: result\n    });\n}"
    },
    {
        "function": "checkPrime",
        "description": "检查数字是否为素数",
        "code": "function checkPrime(num) {\n    if (num <= 1) {\n        return JSON.stringify({\n            result: false\n        });\n    }\n    for (let i = 2; i <= Math.sqrt(num); i++) {\n        if (num % i === 0) {\n            return JSON.stringify({\n                result: false\n            });\n        }\n    }\n    return JSON.stringify({\n        result: true\n    });\n}"
    },
    {
        "function": "calculatePerimeter",
        "description": "计算矩形的周长",
        "code": "function calculatePerimeter(length, width) {\n    let perimeter = 2 * (length + width);\n    return JSON.stringify({\n        result: perimeter\n    });\n}"
    },
    {
        "function": "convertToRoman",
        "description": "将数字转换为罗马数字",
        "code": "function convertToRoman(num) {\n    const romanNumerals = {\n        1000: 'M',\n        900: 'CM',\n        500: 'D',\n        400: 'CD',\n        100: 'C',\n        90: 'XC',\n        50: 'L',\n        40: 'XL',\n        10: 'X',\n        9: 'IX',\n        5: 'V',\n        4: 'IV',\n        1: 'I'\n    };\n\n    let roman = '';\n\n    for (let value in romanNumerals) {\n        while (num >= value) {\n            roman += romanNumerals[value];\n            num -= value;\n        }\n    }\n\n    return JSON.stringify({\n        result: roman\n    });\n}"
    },
    {
        "function": "calculateHypotenuse",
        "description": "计算直角三角形的斜边长度",
        "code": "function calculateHypotenuse(a, b) {\n    let hypotenuse = Math.sqrt(a * a + b * b);\n    return JSON.stringify({\n        result: hypotenuse\n    });\n}"
    },
    {
        "function": "convertToBinary",
        "description": "将十进制数字转换为二进制字符串",
        "code": "function convertToBinary(decimal) {\n    let binary = decimal.toString(2);\n    return JSON.stringify({\n        result: binary\n    });\n}"
    },
    {
        "function": "calculateArea",
        "description": "计算矩形的面积",
        "code": "function calculateArea(length, width) {\n    let area = length * width;\n    return JSON.stringify({\n        result: area\n    });\n}"
    },
    {
        "function": "calculateDistance",
        "description": "计算两点之间的距离",
        "code": "function calculateDistance(x1, y1, x2, y2) {\n    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n    return JSON.stringify({\n        result: distance\n    });\n}"
    },
    {
        "function": "convertToHex",
        "description": "将数字转换为十六进制字符串",
        "code": "function convertToHex(decimal) {\n    let hex = decimal.toString(16);\n    return JSON.stringify({\n        result: hex\n    });\n}"
    },
    {
        "function": "calculateInterest",
        "description": "计算利息",
        "code": "function calculateInterest(principal, rate, time) {\n    let interest = (principal * rate * time) / 100;\n    return JSON.stringify({\n        result: interest\n    });\n}"
    },
    {
        "function": "calculateRoots",
        "description": "计算二次方程的根",
        "code": "function calculateRoots(a, b, c) {\n    let discriminant = b * b - 4 * a * c;\n    let roots = [];\n\n    if (discriminant > 0) {\n        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);\n        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);\n        roots.push(x1, x2);\n    } else if (discriminant === 0) {\n        let x = -b / (2 * a);\n        roots.push(x);\n    }\n\n    return JSON.stringify({\n        result: roots\n    });\n}"
    },
    {
        "function": "convertToOctal",
        "description": "将数字转换为八进制字符串",
        "code": "function convertToOctal(decimal) {\n    let octal = decimal.toString(8);\n    return JSON.stringify({\n        result: octal\n    });\n}"
    },
    {
        "function": "calculatePerimeter",
        "description": "计算圆的周长",
        "code": "function calculatePerimeter(radius) {\n    let perimeter = 2 * Math.PI * radius;\n    return JSON.stringify({\n        result: perimeter\n    });\n}"
    },
    {
        "function": "calculateArea",
        "description": "计算圆的面积",
        "code": "function calculateArea(radius) {\n    let area = Math.PI * Math.pow(radius, 2);\n    return JSON.stringify({\n        result: area\n    });\n}"
    },
    {
        "function": "checkLeapYear",
        "description": "检查年份是否为闰年",
        "code": "function checkLeapYear(year) {\n    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {\n        return JSON.stringify({\n            result: true\n        });\n    }\n    return JSON.stringify({\n        result: false\n    });\n}"
    },
    {
        "function": "calculateSum",
        "description": "计算数组元素的总和",
        "code": "function calculateSum(arr) {\n    let sum = arr.reduce((total, num) => total + num, 0);\n    return JSON.stringify({\n        result: sum\n    });\n}"
    },
    {
        "function": "convertToDecimal",
        "description": "将二进制字符串转换为十进制数字",
        "code": "function convertToDecimal(binary) {\n    let decimal = parseInt(binary, 2);\n    return JSON.stringify({\n        result: decimal\n    });\n}"
    },
    {
        "function": "calculateAverage",
        "description": "计算数字数组的平均值",
        "code": "function calculateAverage(arr) {\n    let sum = arr.reduce((total, num) => total + num, 0);\n    let average = sum / arr.length;\n    return JSON.stringify({\n        result: average\n    });\n}"
    },
    {
        "function": "checkPalindrome",
        "description": "检查字符串是否为回文",
        "code": "function checkPalindrome(str) {\n    let reversedStr = str.split('').reverse().join('');\n    let isPalindrome = str === reversedStr;\n    return JSON.stringify({\n        result: isPalindrome\n    });\n}"
    }
]



export const commondIifeSimple =[
    {
      "description": "对数组进行排序",
      "code": "(function() {\n    var arr = [3, 1, 2];\n    var sortedArray = arr.sort((a, b) => a - b);\n    return JSON.stringify({\n        result: sortedArray\n    });\n})();"
    },
    {
      "description": "计算指数",
      "code": "(function() {\n    var base = 2;\n    var exponent = 3;\n    var result = Math.pow(base, exponent);\n    return JSON.stringify({\n        result: result\n    });\n})();"
    },
    {
      "description": "检查数字是否为素数",
      "code": "(function() {\n    var num = 7;\n    if (num <= 1) {\n        return JSON.stringify({\n            result: false\n        });\n    }\n    for (var i = 2; i <= Math.sqrt(num); i++) {\n        if (num % i === 0) {\n            return JSON.stringify({\n                result: false\n            });\n        }\n    }\n    return JSON.stringify({\n        result: true\n    });\n})();"
    },
    {
      "description": "计算矩形的周长",
      "code": "(function() {\n    var length = 4;\n    var width = 5;\n    var perimeter = 2 * (length + width);\n    return JSON.stringify({\n        result: perimeter\n    });\n})();"
    },
    {
      "description": "将数字转换为罗马数字",
      "code": "(function() {\n    var num = 1234;\n    var romanNumerals = {\n        1000: 'M',\n        900: 'CM',\n        500: 'D',\n        400: 'CD',\n        100: 'C',\n        90: 'XC',\n        50: 'L',\n        40: 'XL',\n        10: 'X',\n        9: 'IX',\n        5: 'V',\n        4: 'IV',\n        1: 'I'\n    };\n\n    var roman = '';\n\n    for (var value in romanNumerals) {\n        while (num >= value) {\n            roman += romanNumerals[value];\n            num -= value;\n        }\n    }\n\n    return JSON.stringify({\n        result: roman\n    });\n})();"
    },
    {
      "description": "计算直角三角形的斜边长度",
      "code": "(function() {\n    var a = 3;\n    var b = 4;\n    var hypotenuse = Math.sqrt(a * a + b * b);\n    return JSON.stringify({\n        result: hypotenuse\n    });\n})();"
    },
    {
      "description": "将十进制数字转换为二进制字符串",
      "code": "(function() {\n    var decimal = 42;\n    var binary = decimal.toString(2);\n    return JSON.stringify({\n        result: binary\n    });\n})();"
    },
    {
      "description": "计算矩形的面积",
      "code": "(function() {\n    var length = 4;\n    var width = 5;\n    var area = length * width;\n    return JSON.stringify({\n        result: area\n    });\n})();"
    },
    {
      "description": "计算两点之间的距离",
      "code": "(function() {\n    var x1 = 1;\n    var y1 = 2;\n    var x2 = 3;\n    var y2 = 4;\n    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n    return JSON.stringify({\n        result: distance\n    });\n})();"
    },
    {
      "description": "将数字转换为十六进制字符串",
      "code": "(function() {\n    var decimal = 255;\n    var hex = decimal.toString(16);\n    return JSON.stringify({\n        result: hex\n    });\n})();"
    },
    {
      "description": "计算利息",
      "code": "(function() {\n    var principal = 1000;\n    var rate = 0.05;\n    var time = 2;\n    var interest = (principal * rate * time) / 100;\n    return JSON.stringify({\n        result: interest\n    });\n})();"
    },
    {
      "description": "计算正方形的周长",
      "code": "(function() {\n    var side = 4;\n    var perimeter = 4 * side;\n    return JSON.stringify({\n        result: perimeter\n    });\n})();"
    },
    {
      "description": "计算二次方程的根",
      "code": "(function() {\n    var a = 1;\n    var b = -3;\n    var c = 2;\n    var discriminant = b * b - 4 * a * c;\n    var roots = [];\n\n    if (discriminant > 0) {\n        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);\n        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);\n        roots.push(x1, x2);\n    } else if (discriminant === 0) {\n        var x = -b / (2 * a);\n        roots.push(x);\n    }\n\n    return JSON.stringify({\n        result: roots\n    });\n})();"
    },
    {
      "description": "将数字转换为八进制字符串",
      "code": "(function() {\n    var decimal = 255;\n    var octal = decimal.toString(8);\n    return JSON.stringify({\n        result: octal\n    });\n})();"
    },
    {
      "description": "计算圆的周长",
      "code": "(function() {\n    var radius = 5;\n    var perimeter = 2 * Math.PI * radius;\n    return JSON.stringify({\n        result: perimeter\n    });\n})();"
    },
    {
      "description": "计算圆的面积",
      "code": "(function() {\n    var radius = 5;\n    var area = Math.PI * Math.pow(radius, 2);\n    return JSON.stringify({\n        result: area\n    });\n})();"
    },
    {
      "description": "检查年份是否为闰年",
      "code": "(function() {\n    var year = 2020;\n    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {\n        return JSON.stringify({\n            result: true\n        });\n    }\n    return JSON.stringify({\n        result: false\n    });\n})();"
    },
    {
      "description": "计算数组元素的总和",
      "code": "(function() {\n    var arr = [1, 2, 3, 4, 5];\n    var sum = arr.reduce(function(total, num) {\n        return total + num;\n    }, 0);\n    return JSON.stringify({\n        result: sum\n    });\n})();"
    },
    {
      "description": "将二进制字符串转换为十进制数字",
      "code": "(function() {\n    var binary = '1010';\n    var decimal = parseInt(binary, 2);\n    return JSON.stringify({\n        result: decimal\n    });\n})();"
    },
    {
      "description": "计算数字数组的平均值",
      "code": "(function() {\n    var arr = [1, 2, 3, 4, 5];\n    var sum = arr.reduce(function(total, num) {\n        return total + num;\n    }, 0);\n    var average = sum / arr.length;\n    return JSON.stringify({\n        result: average\n    });\n})();"
    },
    {
      "description": "检查字符串是否为回文",
      "code": "(function() {\n    var str = 'level';\n    var reversedStr = str.split('').reverse().join('');\n    var isPalindrome = str === reversedStr;\n    return JSON.stringify({\n        result: isPalindrome\n    });\n})();"
    },
    {
      "description": "计算圆的周长",
      "code": "(function() {\n    var radius = 5;\n    var circumference = 2 * Math.PI * radius;\n    return JSON.stringify({\n        result: circumference\n    });\n})();"
    },
    {
      "description": "将十进制数字转换为二进制字符串",
      "code": "(function() {\n    var decimal = 42;\n    var binary = decimal.toString(2);\n    return JSON.stringify({\n        result: binary\n    });\n})();"
    },
    {
      "description": "计算立方体的体积",
      "code": "(function() {\n    var length = 4;\n    var width = 5;\n    var height = 6;\n    var volume = length * width * height;\n    return JSON.stringify({\n        result: volume\n    });\n})();"
    },
    {
      "description": "计算数字的平方根",
      "code": "(function() {\n    var num = 16;\n    var squareRoot = Math.sqrt(num);\n    return JSON.stringify({\n        result: squareRoot\n    });\n})();"
    },
    {
      "description": "检查字符串是否为回文",
      "code": "(function() {\n    var str = 'level';\n    var reversedStr = str.split('').reverse().join('');\n    var isPalindrome = str === reversedStr;\n    return JSON.stringify({\n        result: isPalindrome\n    });\n})();"
    }
  ]


//有参数的
  export const commondIifeSimple2 =[
    {
      "description": "计算两个数字的和",
      "code": "(function(a, b) {\n    var sum = a + b;\n    return JSON.stringify({\n        result: sum\n    });\n})(3, 5);"
    },
    {
      "description": "计算两个数字的差",
      "code": "(function(a, b) {\n    var difference = a - b;\n    return JSON.stringify({\n        result: difference\n    });\n})(8, 3);"
    },
    {
      "description": "计算两个数字的乘积",
      "code": "(function(a, b) {\n    var product = a * b;\n    return JSON.stringify({\n        result: product\n    });\n})(4, 6);"
    },
    {
      "description": "计算两个数字的商",
      "code": "(function(a, b) {\n    var quotient = a / b;\n    return JSON.stringify({\n        result: quotient\n    });\n})(12, 3);"
    },
    {
      "description": "判断一个数字是否为偶数",
      "code": "(function(num) {\n    var isEven = num % 2 === 0;\n    return JSON.stringify({\n        result: isEven\n    });\n})(7);"
    },
    {
      "description": "判断一个数字是否为正数",
      "code": "(function(num) {\n    var isPositive = num > 0;\n    return JSON.stringify({\n        result: isPositive\n    });\n})(-5);"
    },
    {
      "description": "判断一个年份是否为闰年",
      "code": "(function(year) {\n    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;\n    return JSON.stringify({\n        result: isLeapYear\n    });\n})(2020);"
    },
    {
      "description": "计算一个数组的长度",
      "code": "(function(arr) {\n    var length = arr.length;\n    return JSON.stringify({\n        result: length\n    });\n})([1, 2, 3, 4, 5]);"
    },
    {
      "description": "将字符串转换为大写",
      "code": "(function(str) {\n    var uppercaseStr = str.toUpperCase();\n    return JSON.stringify({\n        result: uppercaseStr\n    });\n})('hello');"
    },
    {
      "description": "将字符串转换为小写",
      "code": "(function(str) {\n    var lowercaseStr = str.toLowerCase();\n    return JSON.stringify({\n        result: lowercaseStr\n    });\n})('WORLD');"
    },
    {
      "description": "将字符串反转",
      "code": "(function(str) {\n    var reversedStr = str.split('').reverse().join('');\n    return JSON.stringify({\n        result: reversedStr\n    });\n})('hello');"
    },
    {
      "description": "将数字转换为字符串",
      "code": "(function(num) {\n    var str = num.toString();\n    return JSON.stringify({\n        result: str\n    });\n})(42);"
    },
    {
      "description": "判断一个字符串是否为空",
      "code": "(function(str) {\n    var isEmpty = str.length === 0;\n    return JSON.stringify({\n        result: isEmpty\n    });\n})('Hello');"
    },
    {
      "description": "判断一个数组是否包含某个元素",
      "code": "(function(arr, element) {\n    var containsElement = arr.includes(element);\n    return JSON.stringify({\n        result: containsElement\n    });\n})([1, 2, 3, 4, 5], 3);"
    },
    {
      "description": "计算一个数组的总和",
      "code": "(function(arr) {\n    var sum = arr.reduce(function(total, num) {\n        return total + num;\n    }, 0);\n    return JSON.stringify({\n        result: sum\n    });\n})([1, 2, 3, 4, 5]);"
    },
    {
      "description": "计算一个数组的平均值",
      "code": "(function(arr) {\n    var sum = arr.reduce(function(total, num) {\n        return total + num;\n    }, 0);\n    var average = sum / arr.length;\n    return JSON.stringify({\n        result: average\n    });\n})([1, 2, 3, 4, 5]);"
    },
    {
      "description": "判断一个字符串是否为回文",
      "code": "(function(str) {\n    var reversedStr = str.split('').reverse().join('');\n    var isPalindrome = str === reversedStr;\n    return JSON.stringify({\n        result: isPalindrome\n    });\n})('level');"
    },
    {
      "description": "计算圆的面积",
      "code": "(function(radius) {\n    var area = Math.PI * Math.pow(radius, 2);\n    return JSON.stringify({\n        result: area\n    });\n})(5);"
    },
    {
      "description": "计算三角形的面积",
      "code": "(function(base, height) {\n    var area = (base * height) / 2;\n    return JSON.stringify({\n        result: area\n    });\n})(4, 6);"
    },
    {
      "description": "判断一个数字是否为素数",
      "code": "(function(num) {\n    if (num <= 1) {\n        return JSON.stringify({\n            result: false\n        });\n    }\n    for (var i = 2; i <= Math.sqrt(num); i++) {\n        if (num % i === 0) {\n            return JSON.stringify({\n                result: false\n            });\n        }\n    }\n    return JSON.stringify({\n        result: true\n    });\n})(13);"
    },
    {
      "description": "将数字转换为八进制字符串",
      "code": "(function(decimal) {\n    var octal = decimal.toString(8);\n    return JSON.stringify({\n        result: octal\n    });\n})(42);"
    }
  ]
  















  
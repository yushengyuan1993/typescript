/**
 * @description 枚举
 * 
 * 枚举 `enum` 类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
 */
// 1. 栗子
enum Weekly { Sun, Mon, Tue, Wen, Thu, Fri, Sat }

console.log(Weekly[0]) // Sun
console.log(Weekly[3]) // Wen
console.log(Weekly[6]) // Sat

console.log(Weekly['Sun']) // 0
console.log(Weekly['Wen']) // 3
console.log(Weekly['Sat']) // 6

console.log(Weekly) // {"0":"Sun","1":"Mon","2":"Tue","3":"Wen","4":"Thu","5":"Fri","6":"Sat","Sun":0,"Mon":1,"Tue":2,"Wen":3,"Thu":4,"Fri":5,"Sat":6}
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -')

// 2. 手动赋值
enum Color { Red = 3, Green, Blue }

console.log(Color['Red'])   // 3
console.log(Color['Green']) // 4
console.log(Color['Blue'])  // 5

console.log(Color[0]) // undefined
console.log(Color[3]) // Red
console.log(Color[4]) // Green
console.log(Color[5]) // Blue

console.log(Color)    // { '3': 'Red', '4': 'Green', '5': 'Blue', Red: 3, Green: 4, Blue: 5 }
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -')

// 3. 只可以被覆盖，但是最好不要出现覆盖的情况

// 4. 手动赋值的 枚举项 可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查（编译出的js仍然是可以使用的）
enum Days { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S' }
console.log(Days)

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
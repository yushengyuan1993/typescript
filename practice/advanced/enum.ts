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
console.log('1. --------------------------------------------------------------------------------------')

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
console.log('2. --------------------------------------------------------------------------------------')

// 3. 只可以被覆盖，但是最好不要出现覆盖的情况

// 4.1. 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查（编译出的js仍然是可以使用的）
enum Days { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S' }
console.log(Days)

// 4.2. 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
enum Level { One = 3, Two = 1.5, Three, Four }
console.log(Level)          // {"3":"One","One":3,"Two":1.5,"1.5":"Two","Three":2.5,"2.5":"Three","Four":3.5,"3.5":"Four"}
console.log(Level['One'])   // 3
console.log(Level['Two'])   // 1.5
console.log(Level['Three']) // 2.5
console.log(Level['Four'])  // 3.5

console.log('4. --------------------------------------------------------------------------------------')

// 5. 常数项 和 计算所得项
// 5.1. 常数项(上面的栗子)
// 5.2. 计算所得项
enum Fruit { Apple, Banana, Peach = 'peach'.length } // "peach".length 就是一个计算所得项
console.log(Fruit) // {"0":"Apple","1":"Banana","5":"Peach","Apple":0,"Banana":1,"Peach":5}

// enum _Color {Red = "red".length, Green, Blue};

console.log('5. --------------------------------------------------------------------------------------')

// 6. 常数枚举(const)
// 6.1. 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员；
// 6.2. "const" 枚举仅可在属性、索引访问表达式、导入声明的右侧、导出分配或类型查询中使用。
const enum Directions {
  Up,
  Right,
  Down,
  Left
}
let directions = [Directions.Up, Directions.Right, Directions.Down, Directions.Left]
console.log(directions) // [0, 1, 2, 3]

console.log('6. --------------------------------------------------------------------------------------')

// 7. 外部枚举
// 7.1. 外部枚举(Ambient Enums)是使用 declare enum 定义的枚举类型；
// 7.2. declare 定义的类型只会用于编译时的检查，编译结果会被删除；
declare enum Adirections {
  Up,
  Right,
  Down,
  Left
}

declare const enum Bdirections {
  Up,
  Right,
  Down,
  Left
}
let bdirections = [Bdirections.Up, Bdirections.Right, Bdirections.Down, Bdirections.Left]
console.log(bdirections)

console.log('7. --------------------------------------------------------------------------------------')

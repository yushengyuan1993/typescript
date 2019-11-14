"use strict";
/**
 * @description 枚举
 *
 * 枚举 `enum` 类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
 */
// 1. 栗子
var Weekly;
(function (Weekly) {
    Weekly[Weekly["Sun"] = 0] = "Sun";
    Weekly[Weekly["Mon"] = 1] = "Mon";
    Weekly[Weekly["Tue"] = 2] = "Tue";
    Weekly[Weekly["Wen"] = 3] = "Wen";
    Weekly[Weekly["Thu"] = 4] = "Thu";
    Weekly[Weekly["Fri"] = 5] = "Fri";
    Weekly[Weekly["Sat"] = 6] = "Sat";
})(Weekly || (Weekly = {}));
console.log(Weekly[0]); // Sun
console.log(Weekly[3]); // Wen
console.log(Weekly[6]); // Sat
console.log(Weekly['Sun']); // 0
console.log(Weekly['Wen']); // 3
console.log(Weekly['Sat']); // 6
console.log(Weekly); // {"0":"Sun","1":"Mon","2":"Tue","3":"Wen","4":"Thu","5":"Fri","6":"Sat","Sun":0,"Mon":1,"Tue":2,"Wen":3,"Thu":4,"Fri":5,"Sat":6}
console.log('1. --------------------------------------------------------------------------------------');
// 2. 手动赋值
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
console.log(Color['Red']); // 3
console.log(Color['Green']); // 4
console.log(Color['Blue']); // 5
console.log(Color[0]); // undefined
console.log(Color[3]); // Red
console.log(Color[4]); // Green
console.log(Color[5]); // Blue
console.log(Color); // { '3': 'Red', '4': 'Green', '5': 'Blue', Red: 3, Green: 4, Blue: 5 }
console.log('2. --------------------------------------------------------------------------------------');
// 3. 只可以被覆盖，但是最好不要出现覆盖的情况
// 4.1. 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查（编译出的js仍然是可以使用的）
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wed"] = 10] = "Wed";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days[Days["Sat"] = 'S'] = "Sat";
})(Days || (Days = {}));
console.log(Days);
// 4.2. 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
var Level;
(function (Level) {
    Level[Level["One"] = 3] = "One";
    Level[Level["Two"] = 1.5] = "Two";
    Level[Level["Three"] = 2.5] = "Three";
    Level[Level["Four"] = 3.5] = "Four";
})(Level || (Level = {}));
console.log(Level); // {"3":"One","One":3,"Two":1.5,"1.5":"Two","Three":2.5,"2.5":"Three","Four":3.5,"3.5":"Four"}
console.log(Level['One']); // 3
console.log(Level['Two']); // 1.5
console.log(Level['Three']); // 2.5
console.log(Level['Four']); // 3.5
console.log('4. --------------------------------------------------------------------------------------');
// 5. 常数项 和 计算所得项
// 5.1. 常数项(上面的栗子)
// 5.2. 计算所得项
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Peach"] = 'peach'.length] = "Peach";
})(Fruit || (Fruit = {})); // "peach".length 就是一个计算所得项
console.log(Fruit); // {"0":"Apple","1":"Banana","5":"Peach","Apple":0,"Banana":1,"Peach":5}
// enum _Color {Red = "red".length, Green, Blue};
console.log('5. --------------------------------------------------------------------------------------');
var directions = [0 /* Up */, 1 /* Right */, 2 /* Down */, 3 /* Left */];
console.log(directions); // [0, 1, 2, 3]
console.log('6. --------------------------------------------------------------------------------------');
var bdirections = [0 /* Up */, 1 /* Right */, 2 /* Down */, 3 /* Left */];
console.log(bdirections);
console.log('7. --------------------------------------------------------------------------------------');
//# sourceMappingURL=enum.js.map
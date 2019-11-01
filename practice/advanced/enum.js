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
;
console.log(Weekly[0]); // Sun
console.log(Weekly[3]); // Wen
console.log(Weekly[6]); // Sat
console.log(Weekly['Sun']); // 0
console.log(Weekly['Wen']); // 3
console.log(Weekly['Sat']); // 6
console.log(Weekly); // 
// 2. 手动赋值
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
;
console.log(Color['Red']); // 3
console.log(Color['Green']); // 4
console.log(Color['Blue']); // 5
console.log(Color[0]); // undefined
console.log(Color[3]); // Red
console.log(Color[4]); // Green
console.log(Color[5]); // Blue
console.log(Color); // { '3': 'Red', '4': 'Green', '5': 'Blue', Red: 3, Green: 4, Blue: 5 }

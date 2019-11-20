"use strict";
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color)
        newSquare.color = config.color;
    if (config.width)
        newSquare.area = config.width * config.width;
    return newSquare;
}
var aSquare = createSquare({ color: 'black' });
// let bSquare = createSquare({ colour: 'red' }) // 报错：
// 类型“{ colour: string; }”的参数不能赋给类型“SquareConfig”的参数。
// 对象文字只能指定已知的属性，但“colour”中不存在类型“SquareConfig”。是否要写入 color?
var cSquare = createSquare({ colour: 'green' }); // 类型断言
var dSquare = createSquare({ colour: 'blue' }); // 类型断言
//# sourceMappingURL=interface.js.map
"use strict";
/**
 * @description 元组
 *
 * 数组合并了相同类型的对象，而元组合并了不同类型的对象
 */
// 1.
var tom = ['Tom', 18];
// 2.
var cat;
// cat[0] = 'Jack';
// cat[1] = 20;
// cat[0].slice(1);
// cat[1].toFixed(1);
cat = ['Jack', 20];
// 3.
var dog;
// dog[0] = 'Snoopy';
dog = ['Snoopy', 12];
// 4. 直接对元组类型的变量进行初始化或者赋值时，需要提供所有元组类型中指定的项
var fox;
fox = ['Ahri', 3];
// fox = ['Ahri']; // 报错
// 5. 越界的元素，当尝试添加越界的元素是，它的类型会被限制为元组中的每个类型的联合类型
var pig;
pig = ['Page', 3];
pig.push('male');
pig.push(5);
// pig.push(true); // 报错：类型“true”的参数不能赋给类型“string | number”的参数。
//# sourceMappingURL=tuple.js.map
"use strict";
/**
 * @description 函数的类型
 */
console.log('%c # 1. ---------------------------------------------- ', 'background:#EEE');
function sum(x, y) {
    return x + y;
}
var _sum = sum(1, 3);
console.log(_sum);
console.log('%c # 2. ---------------------------------------------- ', 'background:#EEE');
function sum2(x, y) {
    return x + y;
}
// 应有 2 个参数，但获得 3 个。
// let _sum2 = sum2(1, 2, 3);
console.log('%c # 3. ---------------------------------------------- ', 'background:#EEE');
var sum3 = function (arr) {
    var n = 0;
    arr.forEach(function (el) {
        n += el;
    });
    return n;
};
var _sum3 = sum3([1, 3, 5, 7, 9]);
console.log(_sum3);
console.log('%c # 4. ---------------------------------------------- ', 'background:#EEE');
var fn1;
fn1 = function (s, t) {
    return s === t;
};
// 类型“1”的参数不能赋给类型“string”的参数。
// fn1('str', 1);
var result = fn1('str', 'str');
console.log(result);
console.log('%c # 5. ---------------------------------------------- ', 'background:#EEE');
// 可选参数
// 可选参数必须接在必需参数后面
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    return firstName;
}
var tomcat = buildName('Tom', 'Cat');
console.log(tomcat);
var tom1 = buildName('Tom');
console.log(tom1);
console.log('%c # 6. ---------------------------------------------- ', 'background:#EEE');
// 参数默认值
// TypeScript 会将添加了默认值的参数识别为 可选参数
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var name1 = buildName2('Tom');
console.log(name1);
var name2 = buildName2('Tom', 'Jackson');
console.log(name2);
console.log('%c # 7. ---------------------------------------------- ', 'background:#EEE');
// 剩余参数
// `rest` 参数只能是最后一个参数
var push = function (arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (el) {
        arr.push(el);
    });
    return arr;
};
var arr7 = push([1], 3, 5, 7, '9');
console.log(arr7);
console.log('%c # 8. ---------------------------------------------- ', 'background:#EEE');
function reverse1(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    else {
        return x;
    }
}
var res7 = reverse1(2019);
console.log(res7);
var res8 = reverse1('上海自来水来自海上.');
console.log(res8);
//# sourceMappingURL=function.js.map
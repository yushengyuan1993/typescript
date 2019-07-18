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
    var n = null;
    arr.forEach(function (el) {
        n += el;
    });
    return n;
};
var _sum3 = sum3([1, 3, 5, 7, 9]);
console.log(_sum3);
console.log('%c # 4. ---------------------------------------------- ', 'background:#EEE');
var fn;
fn = function (s, t) {
    return s == t;
};
// 类型“1”的参数不能赋给类型“string”的参数。
// fn('str', 1);
var result = fn('str', 'str');
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
var tom = buildName('Tom');
console.log(tom);
console.log('%c # 5. ---------------------------------------------- ', 'background:#EEE');
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

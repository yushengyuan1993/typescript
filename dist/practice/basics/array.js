"use strict";
/**
 * @description 数组的类型
 */
console.log('%c # 1. ---------------------------------------------- ', 'background:#EEE');
var arr1 = [1, 3, 5, 7];
// Warn: Argument of type '"cat"' is not assignable to parameter of type 'number'.
// arr1.push('cat');
arr1.push(9);
console.log(arr1);
console.log('%c # 2. ---------------------------------------------- ', 'background:#EEE');
// let arr2: number[] = [1, 3, '5', 7]; Warn
var arr2 = [1, 3, '5', 7];
arr2.push('9');
arr2.push(true);
arr2.push('hello');
console.log(arr2);
console.log('%c # 3. ---------------------------------------------- ', 'background:#EEE');
// 数组泛型
var arr3 = [1, 3, 5, 7];
console.log(arr3);
console.log('%c # 4. ---------------------------------------------- ', 'background:#EEE');
var arr4 = [1, 3, 5, 7];
console.log(arr4);
console.log('%c # 5. ---------------------------------------------- ', 'background:#EEE');
var arr5 = [1, 3, 5, '7'];
// arr5.push(9);
console.log(arr5);
console.log('%c # 6. ---------------------------------------------- ', 'background:#EEE');
var arr6 = [1, 3, '5', 7];
arr6.push('9');
console.log(arr6);
console.log('%c # 7. ---------------------------------------------- ', 'background:#EEE');
// 类数组 (Array-like Object)
function fn(arr) {
    var args = arguments;
    console.log('args: ');
    console.log(args);
    console.log(arr);
}
fn([1, 3, 5, 7]);
// 等同于
function add() {
    var args = arguments;
    return args;
}
// function xxx (): any {
//   let args: number[] = arguments;
//   return args;
// }
//# sourceMappingURL=array.js.map
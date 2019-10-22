/**
 * @description 函数的类型
 */

console.log('%c # 1. ---------------------------------------------- ', 'background:#EEE');

function sum (x: number, y: number): number {
  return x + y;
}
let _sum = sum(1, 3);
console.log(_sum);

console.log('%c # 2. ---------------------------------------------- ', 'background:#EEE');

function sum2 (x: number, y: number): number {
  return x + y;
}
// 应有 2 个参数，但获得 3 个。
// let _sum2 = sum2(1, 2, 3);

console.log('%c # 3. ---------------------------------------------- ', 'background:#EEE');

let sum3 = (arr: number[]): number => {
  let n: number = null;
  arr.forEach((el) => {
    n += el;
  });

  return n;
}
let _sum3 = sum3([1, 3, 5, 7, 9]);
console.log(_sum3);

console.log('%c # 4. ---------------------------------------------- ', 'background:#EEE');

// 用接口定义函数的形状（shape）
interface SearchFn {
  (first: string, last: string): boolean;
}
let fn1: SearchFn;
fn1 = function (s, t) {
  return  s === t;
}

// 类型“1”的参数不能赋给类型“string”的参数。
// fn1('str', 1);

let result = fn1('str', 'str');
console.log(result);

console.log('%c # 5. ---------------------------------------------- ', 'background:#EEE');

// 可选参数
// 可选参数必须接在必需参数后面

function buildName (firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName;
  }
  return firstName;
}

let tomcat = buildName('Tom', 'Cat');
console.log(tomcat);

let tom = buildName('Tom');
console.log(tom);

console.log('%c # 6. ---------------------------------------------- ', 'background:#EEE');

// 参数默认值
// TypeScript 会将添加了默认值的参数识别为 可选参数

function buildName2 (firstName: string, lastName: string = 'Cat'): string {
  return firstName + ' ' + lastName;
}
let name1 = buildName2('Tom');
console.log(name1);

let name2 = buildName2('Tom', 'Jackson');
console.log(name2);

console.log('%c # 7. ---------------------------------------------- ', 'background:#EEE');

// 剩余参数
// `rest` 参数只能是最后一个参数

let push = (arr: any[], ...items: any[]): any[] => {
  items.forEach((el) => {
    arr.push(el);
  })
  return arr;
}
let arr7 = push([1], 3, 5, 7, '9');
console.log(arr7);

console.log('%c # 8. ---------------------------------------------- ', 'background:#EEE');

// 重载
function reverse (x: number): number; // 函数的定义
function reverse (y: string): string; // 函数的定义
function reverse (x: number | string): string | number { // 函数的实现
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  } else {
    return x;
  }
}
let res1 = reverse(2019);
console.log(res1);

let res2 = reverse('上海自来水来自海上.');
console.log(res2);
/**
 * @description 类型断言
 * @description 类型断言 不是 类型转换，断言成一个联合类型中不存在的类型是不允许的
 */

console.log('%c # 1. ---------------------------------------------- ', 'background:#EEE');

/**
 * 类型“number”上不存在属性“length”
function getLength (sth: string | number): number {
  if (sth.length) {
    return sth.length;
  } else {
    return sth.toString().length;
  }
}
 */
console.log('类型“number”上不存在属性“length”');

console.log('%c # 2. ---------------------------------------------- ', 'background:#EEE');

function getLength (sth: string | number): number {
  if (( <string>sth ).length) {
    return ( <string>sth ).length;
  } else {
    return sth.toString().length;
  }
}
// function getLength (sth: any): number {
//   if (sth.length) {
//     return sth.length;
//   } else {
//     return sth.toString().length;
//   }
// }
let res1 = getLength(1357);
console.log(res1);

let res2 = getLength('xyz');
console.log(res2);

console.log('%c # 3. ---------------------------------------------- ', 'background:#EEE');

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的

function toBoolean (sth: string | number): boolean {
  // return <boolean>sth; 联合类型中不存在 boolean 类型
  return typeof sth === 'string';
}

let res3 = toBoolean(2019);

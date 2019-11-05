/**
 * @description 类型断言
 * @description 类型断言 不是 类型转换，断言成一个联合类型中不存在的类型是不允许的
 * 类型断言的用法，在需要断言的变量前加上 <Type> 即可。
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
function getLength(sth) {
    if (sth.length) {
        return sth.length;
    }
    else {
        return sth.toString().length;
    }
    // if ( (sth as string).length ) {
    //   return (sth as string).length;
    // } else {
    //   return sth.toString().length;
    // }
}
// function getLength (sth: any): number {
//   if (sth.length) {
//     return sth.length;
//   } else {
//     return sth.toString().length;
//   }
// }
var res1 = getLength(1357);
console.log(res1);
var res2 = getLength('xyz');
console.log(res2);
console.log('%c # 3. ---------------------------------------------- ', 'background:#EEE');
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function toBoolean(sth) {
    // return <boolean>sth; 联合类型中不存在 boolean 类型
    return typeof sth === 'string';
}
var res3 = toBoolean(2019);

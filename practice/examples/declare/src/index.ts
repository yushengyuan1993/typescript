/**
 * @description 声明语句
 * @description 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
 * @description 一般声明语句并没有真的定义一个变量，知识定义了某个变量的 类型 ，仅仅用于编译时的检查，在编译结果中会被删除。
 */
// 声明文件，把声明语句放到一个单独的文件(jQuery.d.ts)中，这就是声明文件

interface ArrayConstructor {
  from(arrayLike: any, mapFn?: any, thisArg?: any): Array<any>
}

console.log('%c # 1. ---------------------------------------------- ', 'background:#EEE');

let re1 = jQuery('.app');
console.log(re1);

let _res1 = Array.from(re1);
console.log(_res1);

console.log('%c # 2. ---------------------------------------------- ', 'background:#EEE');

let re2 = $('.app');
console.log(re2);

let _res2 = Array.from(re2);
console.log(_res2);

console.log('%c # 3. ---------------------------------------------- ', 'background:#EEE');

let res3 = $('.app', (t) => {console.warn(t)});
console.log(res3);



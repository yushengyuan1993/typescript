/**
 * @description 数组的类型
 */

console.log('%c # 1. ---------------------------------------------- ', 'background:#EEE');

let arr1: number[] = [1, 3, 5, 7];

// Warn: Argument of type '"cat"' is not assignable to parameter of type 'number'.
// arr1.push('cat');

arr1.push(9);
console.log(arr1);

console.log('%c # 2. ---------------------------------------------- ', 'background:#EEE');

// let arr2: number[] = [1, 3, '5', 7]; Warn

let arr2: any[] = [1, 3, '5', 7];
arr2.push('9');
arr2.push(true);
arr2.push('hello');
console.log(arr2);

console.log('%c # 3. ---------------------------------------------- ', 'background:#EEE');
// 数组泛型
let arr3: Array<number> = [1, 3, 5, 7];
console.log(arr3);

console.log('%c # 4. ---------------------------------------------- ', 'background:#EEE');
// 使用接口表示数组（不推荐，使用起来麻烦）
interface NumberArr {
  [index: number]: number;
}
let arr4: NumberArr = [1, 3, 5, 7];
console.log(arr4);

console.log('%c # 5. ---------------------------------------------- ', 'background:#EEE');

interface MyArray {
  [index: number]: number | string;
}
let arr5: MyArray = [1, 3, 5, '7'];
// arr5.push(9);
console.log(arr5);

console.log('%c # 6. ---------------------------------------------- ', 'background:#EEE');

let arr6: Array<number | string> = [1, 3, '5', 7];
arr6.push('9');
console.log(arr6);

console.log('%c # 7. ---------------------------------------------- ', 'background:#EEE');

// 类数组 (Array-like Object)
function fn (arr: Array<number>): void {
  let args: IArguments = arguments;

  console.log('args: ');
  console.log(args);

  console.log(arr);
}
fn([1, 3, 5, 7]);
// 等同于
function sum () {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;

  return args;
}

// function xxx (): any {
//   let args: number[] = arguments;

//   return args;
// }
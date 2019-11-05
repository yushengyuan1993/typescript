/**
 * @description 泛型
 * 
 * 泛型(Generics)是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */

console.log('1.1. ---------------------------------------------------------------------------')
// 1.1. 简单的栗子
// 实现一个函数 createArray， 它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：
let createArray = (length: number, value: any): Array<any> => {

  let result = [];

  for (let i = 0; i < length; i ++) {
    result[i] = value;
  }

  return result;

}
console.log(createArray(3, 'ACE')); // [ 'ACE', 'ACE', 'ACE' ]

// 这段代码编译不会报错，但是一个缺陷就是，它没有准确的定义返回值的类型：
// Array<any> 允许数组的每一项为任意类型。但是我们的预期是，数组中的每一项都应该是输入的 value 的类型。
// 这时候，泛型就派上用场了：
function onCreateArray<T> (length: number, value: T): Array<T> {

  let result: T[] = [];

  for (let i = 0; i < length; i ++) {
    result[i] = value;
  }

  return result;

}
console.log( onCreateArray<string>(3, 'x') ); // [ 'x', 'x', 'x' ]

console.log('2. ---------------------------------------------------------------------------')
/**
 * @description 2. 多个类型参数
 * 
 * 定义泛型的时候，可以一次定义多个类型参数。
 */
// 定义 swap 函数用来交换输入的元组
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log( swap([7, 'seven']) ); // [ 'seven', 7 ]

/**
 * @description 3. 泛型约束
 * 
 * 在函数内部使用泛型变量时，由于事先不知道它是哪种类型，
 * 所以不能随意的操作它的属性或方法
 */
console.log('3.1. ---------------------------------------------------------------------------')
// 3.1. 
function loggingIdentify<T>(arg: T): T {
  // console.log(arg.length);  // 报错：类型“T”上不存在属性“length”。
  return arg;
}

console.log('3.2. ---------------------------------------------------------------------------')
// 3.2. 对进行泛型约束，只允许这个函数传入那些包含 length 属性的变量：
interface LengthWise {
  length: number;
}

function fnIdentify<T extends LengthWise> (arg: T): T {
  console.log(arg.length);
  return arg;
}

fnIdentify('hello');
// fnIdentify(24); // 报错：类型“24”的参数不能赋给类型“LengthWise”的参数。

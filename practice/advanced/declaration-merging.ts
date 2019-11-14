/**
 * @description 声明合并
 * 
 * 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型
 */

console.log('1. ---------------------------------------------------------------------------')
/**
 * @description 1. 函数的合并
 */
// 使用重载定义多个函数类型
function reverse (x: string): number;
function reverse (x: number): string;
function reverse (x: number | string): number | string | null {

  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  }

  if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }

  return null;

}
console.log( reverse('hello') ); // olleh
console.log( reverse(10086) ); // 68001

/**
 * @description 2. 接口的合并
 */
console.log('2.1. ---------------------------------------------------------------------------')
// 2.1. 接口中的属性在合并时会简单的合并到一个接口中：
interface Person {
  name: string;
}
interface Person {
  age: number;
}
// 相当于
interface Person {
  name: string;
  age: number;
}

console.log('2.2. ---------------------------------------------------------------------------')
// 2.2. 合并的属性的类型必须是唯一的：
interface Animal {
  name: string;
}
interface Animal {
  name: string;  // 虽然 name 属性重复了，但是类型均为 string，所以不报错
  weight: number;
}

interface Car {
  brand: string;
}
interface Car {
  // brand: number; // 类型不一致，会报错：后续属性声明必须属于同一类型。属性“brand”的类型必须为“string”，但此处却为类型“number”。
  price: number;
}

console.log('2.3. ---------------------------------------------------------------------------')
// 2.3. 接口中的方法的合并，与函数的合并一样：
interface Vegetable {
  price: number;
  alert(v: string): string;
}
interface Vegetable {
  weight: number;
  alert(s: string, t: number): string;
}
// 相当于
interface Vegetable {
  price: number;
  weight: number;
  alert(v: string): string;
  alert(s: string, t: number): string;
}

/**
 * @description 3. 类的合并
 */
// 类的合并与接口的合并规则一致。

/**
 * @description class 类
 */

/**
 * @description 1. Access Modifiers 访问修饰符
 * @param // 1.1. public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的；
 * @param // 1.2. private 修饰的属性或方法是私有的，不能在声明它的类的外部访问；
 * @param // 1.3. protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它的子类中也是允许访问的。
 */
console.log('1.1. ---------------------------------------------------------------------------')

class Animal {
  
  public constructor (name?:string, age?:number, gender?:string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // public
  public name: string;

  // private
  private age: number;

  // protected
  protected gender: string;

  public getPrivateName () {
    return this.age; // 自己可以访问
  }

}
console.log('1.2. ---------------------------------------------------------------------------')

let a = new Animal('Jack')
console.log(a.name) // Jack
a.name = 'Tom'
console.log(a.name) // Tom

console.log('1.3. ---------------------------------------------------------------------------')

let b = new Animal(null, 18, 'male')
// console.log(b.age) // 属性“age”为私有属性，只能在类“Person”中访问。

/**
 * @description 使用 private 修饰的属性或方法，在子类中也是不允许访问的，但使用 protected 修饰，则允许在子类中访问。
 */
class Cat extends Animal {
  constructor (name?: string, age?: number, gender?: string) {
    super(name, age, gender);
  }

  public getName () {
    // return this.age; // 属性“age”为私有属性，只能在类“Animal”中访问。
  }

  public getGender () {
    return this.gender; // 可以访问
  }
}

console.log('1.4. ---------------------------------------------------------------------------')

/**
 * @description 1. 当构造函数被修饰为 private 时， 该类不允许被继承或实例化。
 * @description 2. 当构造函数被修饰为 protected 时， 该类不允许被继承。
 */
class Person {
  public name: string;

  // 4.1.
  // private constructor (name?) {
  //   this.name = name;
  // }

  // 4.2.
  protected constructor (name?: string) {
    this.name = name;
  }
}
// class Jack extends Person { }  // 4.1. 无法扩展类“Person”。类构造函数标记为私有。
// let jack = new Person('jack'); // 4.1. 类“Person”的构造函数是私有的，仅可在类声明中访问。

class Rack extends Person { // 4.2. 允许被继承
  constructor (name?: string) {
    super(name);
  }
}
// let rack = new Person('rack') // 4.2. 不允许被实例化（类“Person”的构造函数是受保护的，仅可在类声明中访问。）

console.log('1.5. ---------------------------------------------------------------------------')
/**
 * @description 修饰符还可以使用在构造函数的参数中，等同于类中定义的该属性，使代码更简洁。
 */
class Car {
  // public brand: string;
  public constructor (public brand: string) {
    this.brand = brand;
  }
}

/**
 * @description 2. readonly 只读属性
 */
console.log('2.1. ---------------------------------------------------------------------------')
// 2.1 只读属性关键字，只允许出现在属性声明或索引签名中。
class Computer {
  readonly brand: string;

  public constructor (brand?: string) {
    this.brand = brand;
  }
}
let pc = new Computer('lenovo')
console.log(pc.brand) // lenovo
// pc.brand = 'hp' // Cannot assign to 'brand' because it is a read-only property.

console.log('2.2. ---------------------------------------------------------------------------')
// 2.2 如果 readonly 和其他访问修饰符同事存在的话，需要写在其后面
class Mobile {
  public readonly brand: string;

  public constructor (public readonly price: number) {
    this.price = price;
  }
}

/**
 * @description 3. abstract 抽象类
 */
console.log('3. ---------------------------------------------------------------------------')
/**
 * 1. abstract 用于定义抽象类和其中的抽象方法；
 * 2. 抽象类不允许被实例化；
 * 3. 抽象类中的抽象方法必须被子类实现；
 */

console.log('3.1. ---------------------------------------------------------------------------')
abstract class Subject {
  public name: string;

  public constructor (name?: string) {
    this.name = name;
  }

  // 1.1. 方法“sayName”不能具有实现，因为它标记为抽象。
  // public abstract sayName () {
  //   return this.name
  // }

  // 1.2. 抽象方法
  public abstract sayName();

  public getName () {
    return this.name;
  }
}
// 1.3. 无法创建抽象类的实例。
// let art = new Subject('art')

console.log('3.2. ---------------------------------------------------------------------------')
// 3. 抽象类中的抽象方法必须被子类实现。
class Chinese extends Subject { // 非抽象类“Chinese”不会实现继承自“Subject”类的抽象成员“sayName”。
  constructor (name?: string) {
    super(name);
  }

  // 1.1. 在子类中实现抽象类中的抽象方法
  public sayName () {
    console.log(`你好, ${this.name}`)
  }
}

let chinese = new Chinese('《春江花月夜》');
chinese.sayName();


/**
 * @description 4. 类的类型
 */
console.log('4. ---------------------------------------------------------------------------')
// 4. 给类加上 TS 类型很简单，与接口类似；
class Framework {
  public name: string;

  constructor (name: string) {
    this.name = name;
  }

  getName (): string {
    return `this is ${this.name}`;
  }
}

let angular: Framework = new Framework('angular');
console.log(angular.getName());
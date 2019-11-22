/**
 * @description 类 与 接口
 * 
 * 1. 接口可以用于对 [对象的形状(Shape)] 进行描述；
 * 2. 接口对类的一部分行为进行抽象。
 */

/**
 * @description 1. 类实现接口
 * 
 * 1. 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些公有的特性，
 * 这时候就可以把特性提取程接口，用 implements 关键字来实现，
 * 这个特性大大提高了面向对象的灵活性。
 * 
 * 2. 举例来说，门是一个类，防盗门是门的子类。
 * 如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
 * 这时候如果有另一个类，车，也有报警器的功能，
 * 就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它。
 */
console.log('1.1. ---------------------------------------------------------------------------')
interface Alarm {
  alert(): void;
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
  alert () {
    console.log('SecurityDoor alert');
  }
}

class Car implements Alarm {
  alert () {
    console.log('Car alert');
  }
}

console.log('1.2. ---------------------------------------------------------------------------')
// 1.2. 一个类可以实现多个接口
interface Movement {
  running(): void;
}

interface Expression {
  smiling(): void;
  crying(): void;
}

// Person 类同时实现了 Movement 和 Expression 接口
class Person implements Movement, Expression {
  public name: string;

  constructor (name: string) {
    this.name = name;
  }

  running () {
    console.log(`${this.name} is running!`);
  }
  smiling () {
    console.log(`${this.name} is smiling!`);
  }
  crying () {
    console.log(`${this.name} is crying!`);
  }
}

let sb = new Person('jack');
sb.running();
sb.smiling();
sb.crying();

/**
 * @description 2. 接口继承接口
 */
console.log('2.1. ---------------------------------------------------------------------------')
interface Jack {
  running(): void;
}
interface Mick {
  name: string;
}
interface Son extends Jack, Mick {
  crying(): void;
  smiling(): void;
  gender: string
}
let son = <Son>{};
son.name = 'annie';
son.gender = 'female';
son.running = () => {};
// ......

/**
 * @description 3. 接口继承类
 */
console.log('3.1. ---------------------------------------------------------------------------')
class Point {
  x: number;
  y: number;

  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 2, y: 1, z: 3 }

/**
 * @description 4. 混合类型
 */
console.log('4.1. ---------------------------------------------------------------------------')
// 4.1. 使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let oSearch: SearchFunc;
oSearch = (source, subString) => { // 接口处已经定义了类型，此处可省略
  return source.search(subString) !== -1;
}

// 4.2. 有时候，一个函数还可以有自己的属性和方法：
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

let getCounter = (): Counter => {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = () => {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5;

/**
 * @description 1. ----------------------------------------------------------------------------
 * @description 声明全局变量
 * @description declare var
 */
// declare var jQuery: (selector: string) => any;
// declare let jQuery: (selector: string) => any;
declare const jQuery: (selector: string) => any; // 推荐使用

// 错误的用法，声明语句中只能定义类型，切勿在声明语句中定义具体的实现
// declare const fnn = (name: string): string => { return name.toUpperCase()};


/**
 * @description 2. ----------------------------------------------------------------------------
 * @description 声明全局方法
 * @description declare function
 */
// declare function $(selector: string): any;

// 函数重载
declare function $(selector: string): any;
declare function $(selector: string, callback?: any): any;


/**
 * @description 3. ----------------------------------------------------------------------------
 * @description 声明全局类
 * @description declare class
 */
declare class People {
  name: string;
  constructor (name: string);
  greeter(): void; // 定义类型
  // drink () {} 不能在环境上下文中声明实现。
}


/**
 * @description 4. ----------------------------------------------------------------------------
 * @description 声明枚举类型
 * @description declare enum
 */
declare enum Directions {
  Top,
  Right,
  Bottom,
  Left
}


/**
 * @description 5. ----------------------------------------------------------------------------
 * @description 声明命名空间
 * @description declare namespace
 */
// 表示全局变量是一个对象，包含很多子属性
declare namespace obj {
  const VERSERION: string;

  let title: string;

  function warn (sth: string | number): void;

  class People {
    name: string;
    greeter: string;
    constructor (name: string, greeter: string)
    say(name: string, greeter: string): void;
  }

  enum Animals {
    Name,
    Food,
    type
  }
}
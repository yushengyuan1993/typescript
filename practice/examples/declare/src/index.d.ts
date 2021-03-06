/**
 * @description 1. ----------------------------------------------------------------------------
 * @description 声明 全局变量
 * @description declare var
 */
// declare var jQuery: (selector: string) => any;
// declare let jQuery: (selector: string) => any;
declare const jQuery: (selector: string) => any; // 推荐使用

// 错误的用法，声明语句中只能定义类型，切勿在声明语句中定义具体的实现
// declare const fnn = (name: string): string => { return name.toUpperCase()};


/**
 * @description 2. ----------------------------------------------------------------------------
 * @description 声明 全局方法
 * @description declare function
 */
// declare function $(selector: string): any;

// 函数重载
declare function $(selector: string): any;
declare function $(selector: string, callback?: any): any;


/**
 * @description 3. ----------------------------------------------------------------------------
 * @description 声明 全局类
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
 * @description 声明 枚举类型
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
 * @description 声明 命名空间
 * @description declare namespace
 */
// 表示全局变量是一个对象，包含很多子属性
declare namespace NAMESPACE {
  const VERSERION: string;

  let title: string;

  function warn (sth: string | number): void;

  class People {
    name: string;
    greeter: string;
    constructor (name: string, greeter: string)
    say(): void;
  }

  enum Animals {
    Name,
    Food,
    Type
  }
}


/**
 * @description 6. ----------------------------------------------------------------------------
 * @description 声明 嵌套的命名空间
 */
declare namespace Apple {
  function ajax (url: string, settings: any): void;
  namespace fn {
    function extend (o: object): void;
  }
}


/**
 * @description 7. ----------------------------------------------------------------------------
 * @description interface 和 type
 * @description 用于声明一个全局的接口(对象的类型)或类型
 */
interface Banana {
  method?: 'GET' | 'POST'
  data?: any
}
declare namespace Canana {
  function fn (url: string, settings?: Banana): void;
}


/**
 * @description 8. ----------------------------------------------------------------------------
 * @description 防止命名冲突
 * // 暴露在最外层的 interface 和 type 会作为全局类型作用于整个项目中
 * // 我们应该尽可能的减少全局变量的数量，
 * // 故最好将他们放到 namespace 下。
 */
declare namespace Cat {
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any
  }
  function ajax (url: string, settings?: AjaxSettings): void;
}


/**
 * @description 9. ----------------------------------------------------------------------------
 * @description 声明合并
 * 合并多个对象或属性
 */
declare function Dog(selector: string): any;
declare namespace Dog {
  function ajax(url: string, settings?: any): void;
}
/**
 * @description 声明全局变量
 * @description declare var
 */
// declare var jQuery: (selector: string) => any;
// declare let jQuery: (selector: string) => any;
declare const jQuery: (selector: string) => any; // 推荐使用

// 错误的用法，声明语句中只能定义类型，切勿在声明语句中定义具体的实现
// declare const fnn = (name: string): string => { return name.toUpperCase()};


/**
 * @description 声明全局方法
 * @description declare function
 */
// declare function $(selector: string): any;

// 函数重载
declare function $(selector: string): any;
declare function $(selector: string, callback?: any): any;


/**
 * @description 声明全局类
 * @description declare class
 */

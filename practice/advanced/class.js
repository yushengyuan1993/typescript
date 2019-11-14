"use strict";
/**
 * @description class 类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @description 1. Access Modifiers 访问修饰符
 * @param // 1.1. public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的；
 * @param // 1.2. private 修饰的属性或方法是私有的，不能在声明它的类的外部访问；
 * @param // 1.3. protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它的子类中也是允许访问的。
 */
console.log('1.1. ---------------------------------------------------------------------------');
var Animal = /** @class */ (function () {
    function Animal(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.person = name + " is a " + age + " years old " + gender;
    }
    Animal.prototype.getPrivateName = function () {
        return this.age; // 自己可以访问
    };
    return Animal;
}());
console.log('1.2. ---------------------------------------------------------------------------');
var a = new Animal('Jack', 22, 'Lady');
console.log(a.name); // Jack
// a.name = 'Tom'
console.log(a.name); // Tom
var f = new Animal('Mick', 18, 'Gentemen');
// console.log(f.age) // 属性“age”为私有属性，只能在类“Person”中访问。
console.log('1.3. ---------------------------------------------------------------------------');
/**
 * @description 使用 private 修饰的属性或方法，在子类中也是不允许访问的，但使用 protected 修饰，则允许在子类中访问。
 */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, gender) {
        return _super.call(this, name, age, gender) || this;
    }
    Cat.prototype.getName = function () {
        // return this.age; // 属性“age”为私有属性，只能在类“Animal”中访问。
    };
    Cat.prototype.getGender = function () {
        return this.gender; // 可以访问
    };
    return Cat;
}(Animal));
console.log('1.4. ---------------------------------------------------------------------------');
/**
 * @description 1. 当构造函数被修饰为 private 时， 该类不允许被继承或实例化。
 * @description 2. 当构造函数被修饰为 protected 时， 该类不允许被继承。
 */
var Someone = /** @class */ (function () {
    // 4.1.
    // private constructor (name?) {
    //   this.name = name;
    // }
    // 4.2.
    function Someone(name) {
        this.name = name;
    }
    return Someone;
}());
// class Jack extends Someone { }  // 4.1. 无法扩展类“Person”。类构造函数标记为私有。
// let jack = new Someone('jack'); // 4.1. 类“Person”的构造函数是私有的，仅可在类声明中访问。
var Rack = /** @class */ (function (_super) {
    __extends(Rack, _super);
    function Rack(name) {
        return _super.call(this, name) || this;
    }
    return Rack;
}(Someone));
// let rack = new Someone('rack') // 4.2. 不允许被实例化（类“Person”的构造函数是受保护的，仅可在类声明中访问。）
console.log('1.5. ---------------------------------------------------------------------------');
/**
 * @description 修饰符还可以使用在构造函数的参数中，等同于类中定义的该属性，使代码更简洁。
 */
var Pc = /** @class */ (function () {
    // public brand: string;
    function Pc(brand) {
        this.brand = brand;
        this.brand = brand;
    }
    return Pc;
}());
/**
 * @description 2. readonly 只读属性
 */
console.log('2.1. ---------------------------------------------------------------------------');
// 2.1 只读属性关键字，只允许出现在属性声明或索引签名中。
var Computer = /** @class */ (function () {
    function Computer(brand) {
        this.brand = brand;
    }
    return Computer;
}());
var pc = new Computer('lenovo');
console.log(pc.brand); // lenovo
// pc.brand = 'hp' // Cannot assign to 'brand' because it is a read-only property.
console.log('2.2. ---------------------------------------------------------------------------');
// 2.2 如果 readonly 和其他访问修饰符同事存在的话，需要写在其后面
var Mobile = /** @class */ (function () {
    function Mobile(price) {
        this.price = price;
        this.brand = 'nokia';
        this.price = price;
    }
    return Mobile;
}());
/**
 * @description 3. abstract 抽象类
 */
console.log('3. ---------------------------------------------------------------------------');
/**
 * 1. abstract 用于定义抽象类和其中的抽象方法；
 * 2. 抽象类不允许被实例化；
 * 3. 抽象类中的抽象方法必须被子类实现；
 */
console.log('3.1. ---------------------------------------------------------------------------');
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.name = name;
    }
    Subject.prototype.getName = function () {
        return this.name;
    };
    return Subject;
}());
// 1.3. 无法创建抽象类的实例。
// let art = new Subject('art') // error: square
console.log('3.2. ---------------------------------------------------------------------------');
// 3. 抽象类中的抽象方法必须被子类实现。
var Chinese = /** @class */ (function (_super) {
    __extends(Chinese, _super);
    function Chinese(name) {
        return _super.call(this, name) || this;
    }
    // 1.1. 在子类中实现抽象类中的抽象方法
    Chinese.prototype.sayName = function () {
        console.log("\u4F60\u597D, " + this.name);
    };
    return Chinese;
}(Subject));
var chinese = new Chinese('《春江花月夜》');
chinese.sayName();
/**
 * @description 4. 类的类型
 */
console.log('4. ---------------------------------------------------------------------------');
// 4. 给类加上 TS 类型很简单，与接口类似；
var Framework = /** @class */ (function () {
    function Framework(name) {
        this.name = name;
    }
    Framework.prototype.getName = function () {
        return "this is " + this.name;
    };
    return Framework;
}());
var angular = new Framework('angular');
console.log(angular.getName());

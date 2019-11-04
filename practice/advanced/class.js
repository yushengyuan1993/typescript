/**
 * @description 类
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
 * @description 1. 访问修饰符(Access Modifiers)
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
    }
    Animal.prototype.getPrivateName = function () {
        return this.age; // 自己可以访问
    };
    return Animal;
}());
console.log('1.2. ---------------------------------------------------------------------------');
var a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom
console.log('1.3. ---------------------------------------------------------------------------');
var b = new Animal(null, 18, 'male');
// console.log(b.age) // 属性“age”为私有属性，只能在类“Person”中访问。
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
var Person = /** @class */ (function () {
    // 4.1.
    // private constructor (name?) {
    //   this.name = name;
    // }
    // 4.2.
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// class Jack extends Person { }  // 4.1. 无法扩展类“Person”。类构造函数标记为私有。
// let jack = new Person('jack'); // 4.1. 类“Person”的构造函数是私有的，仅可在类声明中访问。
var Rack = /** @class */ (function (_super) {
    __extends(Rack, _super);
    function Rack(name) {
        return _super.call(this, name) || this;
    }
    return Rack;
}(Person));
// let rack = new Person('rack') // 4.2. 不允许被实例化（类“Person”的构造函数是受保护的，仅可在类声明中访问。）
console.log('1.5. ---------------------------------------------------------------------------');
/**
 * @description 修饰符还可以使用在构造函数的参数中，等同于类中定义的该属性，使代码更简洁。
 */
var Car = /** @class */ (function () {
    // public brand: string;
    function Car(brand) {
        this.brand = brand;
        this.brand = brand;
    }
    return Car;
}());
/**
 * @description readonly 只读属性关键字，只允许出现在属性声明或索引签名中。
 */
console.log('1.1. ---------------------------------------------------------------------------');

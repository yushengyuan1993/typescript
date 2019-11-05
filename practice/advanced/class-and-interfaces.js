/**
 * @description 类 与 接口
 *
 * 1. 接口可以用于对 [对象的形状(Shape)] 进行描述；
 * 2. 接口对类的一部分行为进行抽象。
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
console.log('1. ---------------------------------------------------------------------------');
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male',
    // grade: true, // error
    grade: 3
};
var _age = tom.age; // number
var _name = tom.name; // string
console.log(_age);
console.log(_name);
console.log(__assign({}, tom));
console.log('----------------------------------------------------------');
var cat = {
    name: 'cat',
    age: 2,
    height: 36
};
// cat.name = 'dog';  赋值是会报错
// Cannot assign to 'name' because it is a read-only property.
var _catName = cat.name;
console.log(_catName);
var jack = {
    name: 'jack',
    age: 18,
    gender: 'female',
    greeter: function (v) { return v; },
    email: {
        google: 'jack@gmail.com'
    }
};
/**
 * @description summary
 *
 * 1. 定义的变量中的属性必须和接口中定义的属性数量一致，如果需要不一致，可以使用可选属性（?:）。
 * 2. 可选属性，该属性可以不存在。
 * 3. 任意属性，可使接口有任意属性。
 */ 

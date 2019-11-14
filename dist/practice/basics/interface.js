"use strict";
var he = {
    name: 'Tom',
    age: 25,
    gender: 'male',
    // grade: true, // error
    grade: 3
};
var _age = he.age; // number
var _name = he.name; // string
console.log(_age);
console.log(_name);
console.log({ he: he });
console.log('----------------------------------------------------------');
var cat1 = {
    name: 'cat1',
    age: 2,
    height: 36
};
// cat1.name = 'dog';  赋值是会报错
// Cannot assign to 'name' because it is a read-only property.
var _catName = cat1.name;
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
//# sourceMappingURL=interface.js.map
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
    gender: 'male'
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
// cat.name = 'dog';  
// Cannot assign to 'name' because it is a read-only property.
var _catName = cat.name;
console.log(_catName);

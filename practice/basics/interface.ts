interface Person {
  name: string;
  age?: number;               // 可选属性，变量中可以没有这个属性
  [propName: string]: string | number;    // 任意属性，
  // [propName: string]: any;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male',
  // grade: true, // error
  grade: 3
};

let _age = tom.age;    // number
let _name = tom.name;  // string

console.log(_age);
console.log(_name);
console.log({...tom});
console.log('----------------------------------------------------------');


/**
 * @description 只读类型
 */
interface Animal {
  readonly name: string; // name 是只读属性
  age: number;
  height: number;
}

let cat: Animal = {
  name: 'cat', // 只读属性只允许在创建的阶段被赋值
  age: 2,
  height: 36
}

// cat.name = 'dog';  赋值是会报错
// Cannot assign to 'name' because it is a read-only property.

let _catName = cat.name;
console.log(_catName);


/**
 * @description summary
 * 
 * 1. 定义的变量中的属性必须和接口中定义的属性数量一致，如果需要不一致，可以使用可选属性（?:）。
 * 2. 可选属性，该属性可以不存在。
 * 3. 任意属性，可使接口有任意属性。
 */
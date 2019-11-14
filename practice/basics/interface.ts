interface Person1 {
  name: string;
  age: number;               // 可选属性，变量中可以没有这个属性
  [propName: string]: string | number;    // 任意属性，
  // [propName: string]: any;
}

let he: Person1 = {
  name: 'Tom',
  age: 25,
  gender: 'male',
  // grade: true, // error
  grade: 3
};

let _age = he.age;    // number
let _name = he.name;  // string

console.log(_age);
console.log(_name);
console.log({he});
console.log('----------------------------------------------------------');


/**
 * @description 只读类型
 */
interface Animal1 {
  readonly name: string; // name 是只读属性
  age: number;
  height: number;
}

let cat1: Animal1 = {
  name: 'cat1', // 只读属性只允许在创建的阶段被赋值
  age: 2,
  height: 36
}

// cat1.name = 'dog';  赋值是会报错
// Cannot assign to 'name' because it is a read-only property.

let _catName = cat1.name;
console.log(_catName);

/**
 * @description 可索引类型
 * 
 * 可索引类型具有一个索引签名，他描述了对象索引的类型，还有相应的索引返回值的类型
 */
interface Email {
  [name: string]: string
}
interface User {
  name: string,
  age?: number,
  readonly gender: string,
  greeter: (w: string) => string,
  email: Email
}
const jack: User = {
  name: 'jack',
  age: 18,
  gender: 'female',
  greeter: function (v) { return v },
  email: {
    google: 'jack@gmail.com'
  }
}


/**
 * @description summary
 * 
 * 1. 定义的变量中的属性必须和接口中定义的属性数量一致，如果需要不一致，可以使用可选属性（?:）。
 * 2. 可选属性，该属性可以不存在。
 * 3. 任意属性，可使接口有任意属性。
 */
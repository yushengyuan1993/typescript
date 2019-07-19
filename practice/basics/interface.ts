interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
  // [propName: string]: string | number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
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
  readonly name: string;
  age: number;
  height: number;
}

let cat: Animal = {
  name: 'cat',
  age: 2,
  height: 36
}

// cat.name = 'dog';  
// Cannot assign to 'name' because it is a read-only property.

let _catName = cat.name;
console.log(_catName);

/**
 * @description 类型别名
 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName (n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// 类型别名常用于联合类型
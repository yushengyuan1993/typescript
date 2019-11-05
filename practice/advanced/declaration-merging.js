/**
 * @description 声明合并
 *
 * 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型
 */
console.log('1. ---------------------------------------------------------------------------');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse('hello')); // olleh
console.log(reverse(10086)); // 68001
/**
 * @description 2. 接口的合并
 */
console.log('2.1. ---------------------------------------------------------------------------');
console.log('2.2. ---------------------------------------------------------------------------');
console.log('2.3. ---------------------------------------------------------------------------');
/**
 * @description 3. 类的合并
 */
// 类的合并与接口的合并规则一致。

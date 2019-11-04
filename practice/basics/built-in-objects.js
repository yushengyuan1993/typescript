/**
 * @description 内置对象
 */
/**
 * @description ECMAScript 的内置对象
 * @param 1. Boolean
 * @param 2. Error
 * @param 3. Date
 * @param 4. RegExp
 * @param 5. ...
 */
var b = new Boolean(1);
var e = new Error('Error occurred');
var d = new Date();
var r = new RegExp(/[a-z]/i);
// ...
/**
 * @description BOM 和 DOM 的内置对象
 * @param 1. Document
 * @param 2. HTMLElement
 * @param 3. Event
 * @param 4. NodeList
 * @param 5. ...
 */
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // your code
});
/**
 * @description 使用TS写Node.js
 */
// Node.js 不是内置对象的一部分，如果想用TS写Node.js，则需要引入第三方声明文件。
// npm i @types/node -S

/**
 * @description 字符串字面量类型
 * 
 * 字符串字面量类型用来约束取值只能是某几个字符串中的一个
 */
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent (ele: any, event: EventNames) {
  // your code
}

handleEvent(null, 'click'); // 正常
// handleEvent(document.querySelector('#app'), 'dbclick'); // 报错

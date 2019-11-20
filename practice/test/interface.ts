interface SquareConfig {
  color?: string,
  width?: number
}

function createSquare (config: SquareConfig): { color: string, area: number } {
  let newSquare = { color: 'white', area: 100 };

  if (config.color) newSquare.color = config.color;

  if (config.width) newSquare.area = config.width * config.width;

  return newSquare;
}

let aSquare = createSquare({ color: 'black' })

// let bSquare = createSquare({ colour: 'red' }) // 报错：
// 类型“{ colour: string; }”的参数不能赋给类型“SquareConfig”的参数。
// 对象文字只能指定已知的属性，但“colour”中不存在类型“SquareConfig”。是否要写入 color?

let cSquare = createSquare(<SquareConfig>{ colour: 'green' })  // 类型断言
let dSquare = createSquare({ colour: 'blue' } as SquareConfig) // 类型断言

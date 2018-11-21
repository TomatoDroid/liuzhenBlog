// 1 import命令接收一对大括号，里面制定要从export模块导出的变量名，大括号里面的变量名，必须与被导入模块对外的接口同名
/* import { firstName } from 'export'; */
// 2 不可对导入的变量进行更改，这样很难排错
// 3 import 会进行变量提升,
// 以下代码并不会报错
/* foo();
import {foo} from 'xxx'; */

// 4 模块的整体加载 '*' 
/* import * as circle from './circle'; */

// 5 对于export default 导出的模块，import不需要使用{}


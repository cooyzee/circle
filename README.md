# circle
Cooyzee's React component library.

## scripts
* why jsx?
1. React认为渲染逻辑本质上与其他UI逻辑内在耦合
2. React将标记和逻辑共同存放在“组件”这个松散耦合单元之中
3. 视觉辅助，显式更多错误和警告信息

> * jsx会自动转义，全部转换为字符串，防止XSS攻击  
> * 组件名必须以大写字母开头
> * 所有React组件都必需像纯函数一样保护它们的props不被更改

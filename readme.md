## 一个简单的node命令行工具

webpack支持编译多页，但是速度非常慢，如果编译前可以选择需要编译的模块，则会方便很多。

以前采用过读取命令行参数的方式来动态编译。
预设一个pages.json，用于存储所有入口。然后命令行输入
`npm run build page=page1,page2`，用了挺久。
缺点在于增加新页面需要增加pages.json的内容。

本项目尝试引入`commander`，`inquirer`,`glob`等工具，命令行执行后，读取约定的目录下的入口文件，用户选择需要编译的模块之后，再进行编译。

### 运行
1. `yarn`安装依赖
2. `./bin/app build`或者`./bin/app b`或者`npm run build b`
3. 安装提示，空格选择模块，enter确定编译
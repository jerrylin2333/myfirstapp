/*
antd UI组件按需加载
*/
const {override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override( 
    fixBabelImports('import', {          /*这里的import指的是bebal-plugin-import，找到antd模块中相应的引用的UI组件的js和css代码*/ 
        libraryName: 'antd', 
        libraryDirectory: 'es', 
        style: true, 
        }),
    addLessLoader({ 
        javascriptEnabled: true, 
        modifyVars: {'@primary-color': '#1DA57A'}, 
    })
);
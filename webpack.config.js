const path = require('path');
HtmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中自动生成 index 页面的插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html'//生成的内存中的首页的名称
})

//向外输出一个打包的配置对象
module.exports = {
    mode: 'development',
    plugins:[
        htmlPlugin
    ],

    module: { //第三方模块的配置规则
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    watch: false
}

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  // context: __dirname,
  entry: {
    hello: './src/script/hello.js',
    a: './src/script/a.js'
  },

  output: {
    path: path.resolve(__dirname,'./dist/'),
    filename: '[chunkhash].js'
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: 'html/index-[hash].html',
      template: 'index.html',
      inject: false,
      title: '分仓库有',
      date: new Date()
    })
  ]
}

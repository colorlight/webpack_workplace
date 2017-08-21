const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  // context: __dirname,
  entry: {
    hello: './src/script/hello.js',
    a: './src/script/a.js',
    b: './src/script/buffer.js',
    c: './src/script/c.js'
  },

  output: {
    path: path.resolve(__dirname,'./dist/'),
    filename: '[name]-[chunkhash].js'
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: 'html/a.html',
      template: 'index.html',
      inject: 'head',
      title: '分仓库有',
      date: new Date(),
      chunks:['a', 'hello']
    }),
    new htmlWebpackPlugin({
      filename: 'html/b.html',
      template: 'index.html',
      inject: 'head',
      title: '分仓库有',
      date: new Date(),
      chunks:['b', 'hello']
    }),
    new htmlWebpackPlugin({
      filename: 'html/c.html',
      template: 'index.html',
      inject: 'head',
      title: '分仓库有',
      date: new Date(),
      chunks:['c']
    })
  ]
}

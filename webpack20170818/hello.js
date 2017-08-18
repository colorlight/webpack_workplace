import {a} from './test.js'
require('style-loader!css-loader!./style.css');
function hello(){
  a()
  alert('hello world')
}


hello();

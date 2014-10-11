/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2014 Kugou.com
* @license      
*
* @overview
*
* v1.0.0 "" - Built: Sat Oct 11 2014 13:00:29
*
*/

define("demo1/dist/demo1",["./1","./2","http://static.kgimg.com/common/js-lib/min/base-min","./abc/3"],function(a){var b=a("./1"),c=a("./2");document.body.innerHTML=c(b.a)}),define("demo1/dist/1",[],function(a,b,c){c.exports={a:"hello world!"}}),define("demo1/dist/2",["http://static.kgimg.com/common/js-lib/min/base-min","demo1/dist/abc/3"],function(a,b,c){a("http://static.kgimg.com/common/js-lib/min/base-min");a("demo1/dist/abc/3");c.exports=function(a){return a},console.log(Kg)}),define("demo1/dist/abc/3",[],function(){console.log("hello world")});
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	var Hello = function(){
		this.msg = "hello";
	};
	module.exports = Hello;
	console.log('hello');
});

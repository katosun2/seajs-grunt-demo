// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	var Write = function(msg){
		this.msg = msg || "";
		return this;
	};

	var Kg = require('kg');


	Write.prototype.write = function(){
		console.log(Kg);
		console.log('write');
		document.body.innerHTML = this.msg;
	};

	module.exports = Write;
});

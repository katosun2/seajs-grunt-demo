// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	require('kg');
	var d = require('./abc/3.js');
	module.exports = function(msg){
		return msg;
	};
	console.log(Kg);
});

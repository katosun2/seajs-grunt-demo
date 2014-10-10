// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	var data = require('./1.js');
	var count = require('./2.js');
	document.body.innerHTML = count(data.a);
});

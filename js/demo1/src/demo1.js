// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	var Hello = require('./hello'),
	Write = require('./write'),
	Good = require('good'),
	_h = new Hello(),
	_w = new Write("It's work!");
	_w.write();
});

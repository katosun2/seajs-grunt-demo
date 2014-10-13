// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	require('phaser');
	require('kg');
	require('kg2/base-min');
	var a = require('./1');
	console.log(Kg);

	var game = new Phaser.Game(400, 400, Phaser.AUTO, 'mygame'),
	Boot = require('../../sealib/test/2.1.2/boot'),
	Boot2 = require('phasermod1/2.1.2/preload');
	
	game.States = {};
	game.States.boot = new Boot(game);

	//添加场景
	game.state.add("boot", game.States.boot);
	//启动场景
	game.state.start("boot");
});

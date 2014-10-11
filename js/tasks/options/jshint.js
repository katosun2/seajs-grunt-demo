module.exports = {
	"src": [
		'**/src/*.js',
		'!node_modules/**/*',
		'!sealib/**/*',
		'!phaser/**/*'
	],
	"options": { 
		"jshintrc": "./tasks/.jshintrc" 
	},
	demo1: require('../../demo1/tasks/manifests/demo1').jshint
};

/**
 * 全局配置Gruntfile.js
 * 自定义加载 tasks 任务
 * 分离任务配置文件
 *
 */
module.exports = function(grunt) {
	var loadConfig = require('load-grunt-config'),
	fs = require('fs');

	/*loadConfig(grunt, {
		configPath: __dirname + '/tasks/options',
		config: {
			release_dir: 'build', //发布目录
			temp_dir: '.build', //临时目录
			compile_dir: 'dist', //编译后目录
			banner: require('fs').readFileSync(__dirname + '/tasks/banner.txt', 'utf8')
		}
	});*/

	//load all grunt custom tasks
	//载入自定义任务
	grunt.loadTasks('tasks');
};

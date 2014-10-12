/**
 * 全局配置Gruntfile.js
 * 自定义加载 tasks 任务
 * 分离任务配置文件
 *
 */
module.exports = function(grunt) {
	//load all grunt custom tasks
	//载入自定义任务
	grunt.loadTasks('tasks');
};

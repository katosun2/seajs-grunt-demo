/**
 * 查看帮助
 *
 */
module.exports = function(grunt) {
	var chalk = require('chalk');

	grunt.registerTask('help', function() {
		grunt.log.writeln(chalk.green("查看帮助: "));
		grunt.log.writeln("");
		grunt.log.writeln("============================ 编译命令 ============================");
		grunt.log.writeln(chalk.yellow("格式：grunt build:<projectName|null>[:2][:initJsName] [--force]"));
		grunt.log.writeln("");
		grunt.log.writeln("参数说明：");
		grunt.log.writeln("<projectName|null>：项目名称，null为不编译项目");
		grunt.log.writeln("[:2]：编译阶段1-5表示transport，concat，jshint，uglify，clean, 数组或字符串");
		grunt.log.writeln("[:initJsName]：入口js文件名称，不指定将直接使用项目名");
		grunt.log.writeln("[--force]：强制运行");
		grunt.log.writeln("如：grunt build:demo1:2    => 项目demo1，编译阶段2");
		grunt.log.writeln("如：grunt build:demo2:[1,2]    => 项目demo2，编译阶段1,2");
		grunt.log.writeln("");
	});
};


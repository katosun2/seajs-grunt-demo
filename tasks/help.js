/**
 * 查看帮助
 *
 */
module.exports = function(grunt) {
	grunt.registerTask('help', function() {
		console.log("查看帮助: ");
		console.log("");
		console.log("============================ 编译命令 ============================");
		console.log("格式：grunt build:<projectName|null>[:2] [--force]");
		console.log("");
		console.log("参数说明：");
		console.log("<projectName|null>：项目名称，null为不编译项目");
		console.log("[:2]：编译阶段1-5表示transport，concat，jshint，uglify，clean, 数组或字符串");
		console.log("[--force]：强制运行");
		console.log("如：grunt build:demo1:2    => 项目demo1，编译阶段2");
		console.log("如：grunt build:demo2:[1,2]    => 项目demo2，编译阶段1,2");
		console.log("");
	});
};


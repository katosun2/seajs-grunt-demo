/**
 * 默认任务
 *
 */
module.exports = function(grunt) {
	var fs = require('fs');
	/**
	 * 定义默认命令
	 */
	grunt.registerTask('default', function() {
		console.log('输入命令 grunt help 查看帮助');
	});

	/**
	* 运行指定任务
	* 
	*/
	var runIndexTask = function(project, num) {
		if (num == 1) {
			grunt.task.run(['transport:sealib', project ? ('transport:' + project) : 'transport']);
		} else if (num == 2) {
			grunt.task.run(project ? ('concat:' + project) : 'concat');
		} else if (num == 3) {
			grunt.task.run(project ? ('jshint:' + project) : 'jshint');
		} else if (num == 4) {
			grunt.task.run(project ? ('uglify:' + project) : 'uglify');
		} else if (num == 5) {
			grunt.task.run(project ? ('copy:' + project) : 'copy');
		} else if (num == 6) {
			grunt.task.run(project ? ('clean:' + project) : 'clean');
		}
	};

	/**
	 * 编译项目
	 * grunt build:project:stage
	 *
	 * @param { String } 项目名称 
	 * @param { Number } 编译阶段数
	 */
	grunt.registerTask('build', '编译项目', function(project, stage) {
		var i = 0,
		Fn = Function;

		//生成配置
		var tmpData = fs.readFileSync(__dirname + '/manifests/config-templete.json', 'utf8');
		tmpData = tmpData.replace(/\{projectName\}/g, project);
		fs.writeFileSync(__dirname + '/manifests/config.json', tmpData);

		//加载配置
		var loadConfig = require('load-grunt-config');
		loadConfig(grunt, {
			configPath: __dirname + '/options',
			config: {
				project_name : project, //项目名称
				release_dir: 'build', //发布目录
				temp_dir: '.build', //临时目录
				concat_tmp_dir : 'tmp',
				compile_dir: 'dist', //编译后目录
				banner: fs.readFileSync(__dirname + '/banner.txt', 'utf8')
			}
		});

		if (stage) {
			stage = (new Fn("return " + stage))();
		}

		if (project != 'null' && stage) {
			if (Object.prototype.toString.call(stage) === '[object Array]') {
				for (i = 0, len = stage.length; i < len; i++) {
					runIndexTask(project, stage[i]);
				}
			} else {
				runIndexTask(project, stage);
			}
		} else if (stage) {
			if (Object.prototype.toString.call(stage) === '[object Array]') {
				for (i = 0, len = stage.length; i < len; i++) {
					runIndexTask(null, stage[i]);
				}
			} else {
				runIndexTask(null, stage);
			}
		} else {
			grunt.task.run(['transport:sealib', 'transport:' + project, 'concat:' + project, 'jshint:' + project, 'uglify:' + project, 'copy:' + project, 'clean:' + project]);
		}
		console.log("");
	});
};


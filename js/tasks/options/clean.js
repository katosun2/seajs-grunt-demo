/**
 * 清理编译目录
 *
 */
module.exports = {
    //temp_dir: ['**/<%= temp_dir %>', '!**/node_modules/**/<%= temp_dir %>'],
    //compile_dir: ['**/<%= compile_dir %>', '!**/node_modules/**/<%= compile_dir %>'],
	demo1: require('../../demo1/tasks/manifests/demo1').clean
};

/*"files" : [{
"src" : ["<%= project_name %>/<%= compile_dir %>/<%= project_name %>.js"],
"dest" : "<%= project_name %>/<%= project_name %>.js"
}]*/
module.exports = require('../manifests/config').copy;

/*map start*/
seajs.production = true;
if(seajs.production){
    seajs.config({
        map: [
	[
		"src/demo1.js",
		"src/demo1.js?b96bb973f0b470d88edcde84d94e2c14"
	],
	[
		"src/hello.js",
		"src/hello.js?7a98f94936f8b488834b3fde548b6523"
	],
	[
		"src/write.js",
		"src/write.js?72016c4567d440d746316ee0c8c0aee0"
	]
]
    });
}
/*map end*/
seajs.config({
	// Sea.js 的基础路径
	base: '../js',
	// 别名配置
	alias: {
		'kg': 'sealib/kg/kg/2.0.0/base-min'
	},
	debug : true
});

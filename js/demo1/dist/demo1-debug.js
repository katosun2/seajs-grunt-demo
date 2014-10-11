// 所有模块都通过 define 来定义
define("demo1/dist/demo1-debug", [ "./1-debug", "./2-debug", "http://static.kgimg.com/common/js-lib/min/base-min-debug", "./abc/3-debug" ], function(require, exports, module) {
    var data = require("./1-debug");
    var count = require("./2-debug");
    document.body.innerHTML = count(data.a);
});

// 所有模块都通过 define 来定义
define("demo1/dist/1-debug", [], function(require, exports, module) {
    module.exports = {
        a: "hello world!"
    };
});

// 所有模块都通过 define 来定义
define("demo1/dist/2-debug", [ "http://static.kgimg.com/common/js-lib/min/base-min-debug", "demo1/dist/abc/3-debug" ], function(require, exports, module) {
    require("http://static.kgimg.com/common/js-lib/min/base-min-debug");
    var d = require("demo1/dist/abc/3-debug");
    module.exports = function(msg) {
        return msg;
    };
    console.log(Kg);
});

// 所有模块都通过 define 来定义
define("demo1/dist/abc/3-debug", [], function(require, exports, module) {
    console.log("hello world");
});

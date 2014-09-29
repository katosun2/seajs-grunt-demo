// 所有模块都通过 define 来定义
define("demo1/dist/demo1-debug", [ "./hello-debug", "./write-debug", "sealib/kg/kg/2.0.0/base-min-debug", "good-debug" ], function(require, exports, module) {
    var Hello = require("./hello-debug"), Write = require("./write-debug"), Good = require("good-debug"), _h = new Hello(), _w = new Write("It's work!");
    _w.write();
});

// 所有模块都通过 define 来定义
define("demo1/dist/hello-debug", [], function(require, exports, module) {
    var Hello = function() {
        this.msg = "hello";
    };
    module.exports = Hello;
    console.log("hello");
});

// 所有模块都通过 define 来定义
define("demo1/dist/write-debug", [ "sealib/kg/kg/2.0.0/base-min-debug" ], function(require, exports, module) {
    var Write = function(msg) {
        this.msg = msg || "";
        return this;
    };
    var Kg = require("sealib/kg/kg/2.0.0/base-min-debug");
    Write.prototype.write = function() {
        console.log(Kg);
        console.log("write");
        document.body.innerHTML = this.msg;
    };
    module.exports = Write;
});

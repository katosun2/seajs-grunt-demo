/**
* @author       Boat <neko@imiku.com>
* @copyright    2014 Kugou.com
* @license      
* @overview
* v1.0.2 "" - Built: Mon Oct 13 2014 23:16:43
*/

define("demo1/dist/demo1",["phaser","kg","kg2/base-min","./1","../../sealib/test/2.1.2/boot","phasermod1/2.1.2/preload"],function(a){a("phaser"),a("kg"),a("kg2/base-min");a("./1");console.log(Kg);{var b=new Phaser.Game(400,400,Phaser.AUTO,"mygame"),c=a("../../sealib/test/2.1.2/boot");a("phasermod1/2.1.2/preload")}b.States={},b.States.boot=new c(b),b.state.add("boot",b.States.boot),b.state.start("boot")}),define("demo1/dist/1",[],function(){}),define("sealib/test/2.1.2/boot",[],function(a,b,c){var d=function(a,b){this.create=function(){navigator.userAgent.match(/AppleWebKit.*Mobile.*/)?(a.scale.minWidth=window.innerWidth,a.scale.minHeight=window.innerHeight,a.scale.maxWidth=window.innerWidth,a.scale.maxHeight=window.innerHeight,a.scale.pageAlignHorizontally=!0,a.scale.setScreenSize(!0)):(a.scale.minWidth=document.body.clientWidth,a.scale.minHeight=document.body.clientHeight,a.scale.maxWidth=document.body.clientWidth,a.scale.maxHeight=document.body.clientHeight,a.scale.pageAlignHorizontally=!0,a.scale.setScreenSize(!0)),b&&a.state.start(b)}};c.exports=d});
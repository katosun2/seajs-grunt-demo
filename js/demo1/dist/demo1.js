/**
* @author       Boat <neko@imiku.com>
* @copyright    2014 Kugou.com
* @license      
* @overview
* v1.0.0 "" - Built: Sun Oct 12 2014 12:15:21
*/

define("demo1/dist/demo1",["phaser","abcede","kg2/base-min","./1","phasermod/boot","phasermod1/2.1.2/preload"],function(a){a("phaser"),a("abcede"),a("kg2/base-min");a("./1");console.log(Kg);{var b=new Phaser.Game(400,400,Phaser.AUTO,"mygame"),c=a("phasermod/boot");a("phasermod1/2.1.2/preload")}b.States={},b.States.boot=new c(b),b.state.add("boot",b.States.boot),b.state.start("boot")}),define("demo1/dist/1",[],function(){});
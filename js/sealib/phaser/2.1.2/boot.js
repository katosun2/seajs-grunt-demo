define(function(require, exports, module) {
	var Boot = function(game, nextState) {
		this.create = function() {
			if (!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) {
				game.scale.minWidth = window.innerWidth;
				game.scale.minHeight = window.innerHeight;
				game.scale.maxWidth = window.innerWidth;
				game.scale.maxHeight = window.innerHeight;
				game.scale.pageAlignHorizontally = true;
				game.scale.setScreenSize(true);
			} else {
				game.scale.minWidth = document.body.clientWidth;
				game.scale.minHeight = document.body.clientHeight;
				game.scale.maxWidth = document.body.clientWidth;
				game.scale.maxHeight = document.body.clientHeight;
				game.scale.pageAlignHorizontally = true;
				game.scale.setScreenSize(true);
			}

			if(nextState){
				//启动资源加载
				game.state.start(nextState);
			}
		};
	};
	module.exports = Boot;
});


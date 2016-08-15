function Animation(ctx) {
	this.ctx = ctx;
	this.sprites = [];
	this.play = false;
}
Animation.prototype = {
	start: function() {
		this.play = true;
		this.nextFrame();
	},
	stop: function() {
		this.play = false;
	},
	addSprite: function(sprite) {
		this.sprites.push(sprite);
	},
	clearCanvas: function() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	},
	nextFrame: function() {
		if ( !this.play ) return;

		this.clearCanvas();

		for ( var i in this.sprites )
			this.sprites[i].update();
		for ( var i in this.sprites )
			this.sprites[i].draw();

		var $this = this;
		requestAnimationFrame(function() {
			$this.nextFrame();
		});
	}
}
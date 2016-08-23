function Explosion(context, img, x, y) {
	this.ctx = context;
	this.img = img;
	this.x   = x;
	this.y   = y;
	this.end = null;

	this.spritesheet = new Spritesheet(this.ctx, this.img, 1, 5);
	this.spritesheet.interval = 75;

	var $this = this;
	this.spritesheet.end = function() {
		$this.animation.deleteSprite($this);
		if ( $this.end ) $this.end();
	}
}
Explosion.prototype = {
	update: function() {

	},
	draw: function() {
		this.spritesheet.draw(this.x, this.y);
		this.spritesheet.nextFrame();
	}
}
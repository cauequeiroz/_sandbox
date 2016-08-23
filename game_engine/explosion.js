var soundExplosion = new Audio();
	soundExplosion.src = 'explosao.mp3';
	soundExplosion.volume = 0.4;
	soundExplosion.load();

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

	soundExplosion.currentTime = 0.0;
	soundExplosion.play();
}
Explosion.prototype = {
	update: function() {

	},
	draw: function() {
		this.spritesheet.draw(this.x, this.y);
		this.spritesheet.nextFrame();
	}
}
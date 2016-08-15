function Hero(ctx, keyboard, animation) {
	this.ctx = ctx;
	this.keyboard = keyboard;
	this.animation = animation;

	this.x = 0;
	this.y = 0;
	this.color = 'black';
	this.speed = 10;
	this.direction = 'right';
}
Hero.prototype = {
	update: function() {
		if ( this.keyboard.pressed(KEY_LEFT) && this.x > 0 ) {
			this.x -= this.speed;
			this.direction = 'left';
		}
		else if ( this.keyboard.pressed(KEY_RIGHT) && this.x < this.ctx.canvas.width - 20 ) {
			this.x += this.speed;
			this.direction = 'right';
		}
	},
	draw: function() {
		this.ctx.save();

		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, 20, 50);

		this.ctx.restore();
	},
	shot: function() {
		var bullet = new Ball(this.ctx);
			bullet.x = this.x + 10;
			bullet.y = this.y + 10;
			bullet.radius = 8;
			bullet.color  = '#2ecc71';

		if ( this.direction === 'right' )
			bullet.speedX = 10;
		else
			bullet.speedX = -10;

		this.animation.addSprite(bullet);
	}
}
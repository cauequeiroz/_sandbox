function Hero(ctx, keyboard, animation) {
	this.ctx = ctx;
	this.keyboard = keyboard;
	this.animation = animation;

	this.x = 0;
	this.y = 125;
	this.color = '#2980b9';
	this.speed = 10;
	this.direction = 'right';
}
Hero.prototype = {
	update: function() {
		if ( this.keyboard.pressed(KEY_UP) && this.y > 0 ) {
			this.y -= this.speed;
		}
		else if ( this.keyboard.pressed(KEY_DOWN) && this.y < this.ctx.canvas.height - 50 ) {
			this.y += this.speed;
		}
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
	shotting: function() {
		var bullet = new Ball(this.ctx);
			bullet.x = this.x + 10;
			bullet.y = this.y + 10;
			bullet.color = '#9b59b6';
			bullet.radius = 10;

		if ( this.direction === 'right' )
			bullet.speedX = 20;
		else
			bullet.speedX = -20;

		this.animation.addSprite(bullet);
	}
}
function Spaceship(context, keyboard, img) {
	this.ctx = context;
	this.keyboard = keyboard;
	this.img = img;

	this.x = 0;
	this.y = 0;
	this.speed = 10;
}
Spaceship.prototype = {
	update: function() {
		if ( this.keyboard.pressed(KEY_LEFT) && this.x > 0 ) {
			this.x -= this.speed;
		}
		if ( this.keyboard.pressed(KEY_RIGHT) &&
			 this.x < this.ctx.canvas.width - this.img.width ) {
			this.x += this.speed;
		}
		if ( this.keyboard.pressed(KEY_UP) && this.y > 0 ) {
			this.y -= this.speed;
		}
		if ( this.keyboard.pressed(KEY_DOWN) &&
		     this.y < this.ctx.canvas.height - this.img.height ) {
			this.y += this.speed;
		}			
	},
	draw: function() {
		var img = this.img;
		this.ctx.drawImage(img, this.x, this.y, img.width, img.height)
	},
	shot: function() {
		var bullet = new Bullet(this.ctx, this);
		this.animation.addSprite(bullet);
	}
}
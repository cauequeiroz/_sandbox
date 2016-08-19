function Bullet(ctx, spaceship) {
	this.ctx = ctx;

	this.width = 5;
	this.height = 20;
	this.speed = 20;
	this.color = '#e74c3c';
	this.x = spaceship.x + spaceship.img.width / 2 - this.width;
	this.y = spaceship.y - this.height;
}
Bullet.prototype = {
	update: function() {
		this.y -= this.speed;
	},
	draw: function() {
		this.ctx.save();
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.restore();
	}
}
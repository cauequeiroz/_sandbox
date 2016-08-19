function Bullet(ctx, spaceship) {
	this.ctx = ctx;

	this.width = 5;
	this.height = 20;
	this.speed = 10;
	this.color = '#e74c3c';
	this.x = spaceship.x + spaceship.img.width / 2 - this.width;
	this.y = spaceship.y - this.height;
}
Bullet.prototype = {
	update: function() {
		this.y -= this.speed;

		if ( this.y < -this.height ) {
			this.animation.deleteSprite(this);
			this.collision.deleteSprite(this);
		}
	},
	draw: function() {
		this.ctx.save();
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.restore();
	},
	getRects: function() {
		var rects = [
			{x: this.x, y: this.y, width: this.width, height: this.height}
		];

		// for ( var i in rects ) {
		// 	var ctx = this.ctx;
		// 	ctx.save();
		// 	ctx.strokeStyle = 'yellow';
		// 	ctx.strokeRect(rects[i].x,rects[i].y,rects[i].width,rects[i].height);
		// 	ctx.restore()
		// }

		return rects;
	},
	collidedWith: function() {
		
	}
}
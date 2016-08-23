function Bullet(ctx, spaceship) {
	this.ctx = ctx;

	this.width = 3;
	this.height = 10;
	this.speed = 400;
	this.color = 'yellow';
	this.x = spaceship.x + 18 - this.width / 2;
	this.y = spaceship.y - this.height;
}
Bullet.prototype = {
	update: function() {
		this.y -= this.speed * this.animation.timeDifference / 1000;

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
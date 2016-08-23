function Ovni(context, img, imgExplosion) {
	this.ctx = context;
	this.img = img;
	this.imgExplosion = imgExplosion;

	this.x = 0;
	this.y = 0;
	this.speed = 0;
}
Ovni.prototype = {
	update: function() {
		this.y += this.speed * this.animation.timeDifference / 1000;

		if ( this.y > this.ctx.canvas.height ) {
			this.animation.deleteSprite(this);
			this.collision.deleteSprite(this);
		}
	},
	draw: function() {
		this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
	},
	getRects: function() {
		var rects = [
			{x:this.x+20, y:this.y+1, width:25, height:10},
			{x:this.x+2, y:this.y+11, width:60, height:12},
			{x:this.x+20, y:this.y+23, width:25, height:7}
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
	collidedWith: function(other) {
		if ( other instanceof Bullet ) {
			this.animation.deleteSprite(this);
			this.collision.deleteSprite(this);
			this.animation.deleteSprite(other);
			this.collision.deleteSprite(other);

			var explosion = new Explosion(this.ctx, this.imgExplosion, this.x, this.y);
			this.animation.addSprite(explosion);
		}
	}
}
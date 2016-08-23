function Spaceship(context, keyboard, img, imgExplosion) {
	this.ctx = context;
	this.keyboard = keyboard;
	this.img = img;
	this.imgExplosion = imgExplosion;

	this.x = 0;
	this.y = 0;
	this.speed = 5;
	this.spritesheet = new Spritesheet(this.ctx, this.img, 3, 2);
	this.spritesheet.row = 0;
	this.spritesheet.interval = 100;
}
Spaceship.prototype = {
	update: function() {
		var increment = this.speed * this.animation.timeDifference / 1000;
		if ( this.keyboard.pressed(KEY_LEFT) && this.x > 0 ) {
			this.x -= increment;
		}
		if ( this.keyboard.pressed(KEY_RIGHT) &&
			 this.x < this.ctx.canvas.width - 36 ) {
			this.x += increment;
		}
		if ( this.keyboard.pressed(KEY_UP) && this.y > 0 ) {
			this.y -= increment;
		}
		if ( this.keyboard.pressed(KEY_DOWN) &&
		     this.y < this.ctx.canvas.height - 48 ) {
			this.y += increment;
		}			
	},
	draw: function() {
		if ( this.keyboard.pressed(KEY_LEFT) ) {
			this.spritesheet.row = 1;
		}
		else if ( this.keyboard.pressed(KEY_RIGHT) ) {
			this.spritesheet.row = 2;
		}
		else {
			this.spritesheet.row = 0;
		}

		this.spritesheet.draw(this.x, this.y);
		this.spritesheet.nextFrame();
	},
	shot: function() {
		var bullet = new Bullet(this.ctx, this);
		this.animation.addSprite(bullet);
		this.collision.addSprite(bullet);
	},
	getRects: function() {
		var rects = [
			{x:this.x+2, y:this.y+19, width:9, height:13},
			{x:this.x+13, y:this.y+3, width:10, height:33},
			{x:this.x+25, y:this.y+19, width:9, height:13}
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
		if ( other instanceof Ovni ) {
			this.animation.deleteSprite(this);
			this.collision.deleteSprite(this);
			this.animation.deleteSprite(other);
			this.collision.deleteSprite(other);

			var exp1 = new Explosion(this.ctx, this.imgExplosion, this.x, this.y),
				exp2 = new Explosion(this.ctx, this.imgExplosion, other.x, other.y);

			this.animation.addSprite(exp1);
			this.animation.addSprite(exp2);

			exp1.end = function() {
				animation.stop();
				console.log('Game over!');
			}
		}
	}
}
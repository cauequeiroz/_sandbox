function Spaceship(context, keyboard, img) {
	this.ctx = context;
	this.keyboard = keyboard;
	this.img = img;

	this.x = 0;
	this.y = 0;
	this.speed = 5;
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
			this.animation.stop();
			alert('game over');
		}
	}
}
function Sonic(ctx, image, keyboard) {
	this.ctx = ctx;
	this.image = image;
	this.keyboard = keyboard;

	this.x = 0;
	this.y = 125;
	this.speed = 10;
	this.sheet = new Spritesheet(this.ctx, this.image, 3, 8);
	this.walking = false;
	this.direction = 'right';
}
Sonic.prototype = {
	update: function() {
		// Left
		if ( 
			this.keyboard.pressed(KEY_LEFT) &&
			this.x > 0
		) {
			if ( !this.walking || this.direction !== 'left' ) {
				this.sheet.row = 2;
				this.sheet.col = 0;
			}

			this.direction = 'left';
			this.walking = true;
			this.sheet.nextFrame();
			this.x -= this.speed;
		}
		// Right
		else if ( 
			this.keyboard.pressed(KEY_RIGHT) &&
			this.x < this.ctx.canvas.width - (this.sheet.image.width/this.sheet.n_col)
		) {
			if ( !this.walking || this.direction !== 'right' ) {
				this.sheet.row = 1;
				this.sheet.col = 0;
			}

			this.direction = 'right';
			this.walking = true;
			this.sheet.nextFrame();
			this.x += this.speed;
		}
		else {
			this.walking = false;
			this.sheet.row = 0;

			if ( this.direction === 'right' )
				this.sheet.col = 0;
			else
				this.sheet.col = 1;
		}
	},
	draw: function() {
		this.sheet.draw(this.x, this.y);
	}
}
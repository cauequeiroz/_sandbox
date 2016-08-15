function Sonic(ctx, image) {
	this.ctx      = ctx;
	this.image    = image;
	this.keyboard = keyboard

	this.x         = 0;
	this.y         = 100;
	this.speed     = 10;
	this.walking   = false;
	this.direction = 'right';

	this.sheet = new Spritesheet(this.ctx, this.image, 3, 8);
}
Sonic.prototype = {
	update: function() {
		if ( this.keyboard.pressed(KEY_LEFT) ) {
			if ( !this.walking || this.direction !== 'left' ) {
				this.sheet.col = 0;
				this.sheet.row = 2;
			}			

			this.direction = 'left';
			this.walking = true;
			
			this.x -= this.speed;
			this.sheet.nextFrame();
		}
		else if ( this.keyboard.pressed(KEY_RIGHT) ) {
			if ( !this.walking || this.direction !== 'right' ) {
				this.sheet.col = 0;
				this.sheet.row = 1;
			}			

			this.direction = 'right';
			this.walking = true;

			this.x += this.speed;
			this.sheet.nextFrame();
		} else {
			this.sheet.row = 0;
			this.walking = false;

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
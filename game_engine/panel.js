function Panel(ctx, spaceship) {
	this.ctx = ctx;
	this.spaceship = spaceship;

	this.spritesheet = new Spritesheet(this.ctx, this.spaceship.img, 3, 2);
	this.spritesheet.row = 0;
	this.spritesheet.col = 0;
	this.score = 0;
}
Panel.prototype = {
	update: function() {

	},
	draw: function() {
		this.ctx.scale(0.5, 0.5);

		var x = 20,
			y = 20;

		for ( var i=0; i<this.spaceship.lifes; i++ ) {
			this.spritesheet.draw(x, y);
			x += 40;
		}

		this.ctx.scale(2, 2);

		this.ctx.save();
		this.ctx.fillStyle = 'white';
		this.ctx.font = '18px sans-serif';
		this.ctx.fillText(this.score, 100, 28);
		this.ctx.restore();
	}
}
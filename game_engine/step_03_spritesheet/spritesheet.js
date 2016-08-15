function Spritesheet(ctx, image, row, col) {
	this.ctx = ctx;
	this.image = image;
	this.n_row = row;
	this.n_col = col;

	this.row = 0;
	this.col = 0;
	this.interval = 41;
}
Spritesheet.prototype = {
	nextFrame: function() {
		var now = new Date().getTime();
		if ( !this.last_time ) this.last_time = now;
		if ( now - this.last_time < this.interval ) return;

		if ( this.col < this.n_col - 1 )
			this.col++;
		else
			this.col = 0;

		this.last_time = now;
	},
	draw: function(x, y) {
		var width  = this.image.width / this.n_col,
			height = this.image.height / this.n_row;

		this.ctx.drawImage(
			this.image,
			width * this.col,
			height * this.row,
			width,
			height,

			x, y, width, height
		);
	}
}
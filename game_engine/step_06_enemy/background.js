function Background(context, img) {
	this.ctx = context;
	this.img = img;

	this.x = 0;
	this.y = 0;
	this.division = 0;
}
Background.prototype = {
	update: function() {
		this.division += this.speed;

		if ( this.division > this.img.height )
			this.division = 0;
	},
	draw: function() {
		var posY = this.division - this.img.height;
		this.ctx.drawImage(
			this.img,
			this.x, posY,
			this.img.width, this.img.height
		);

		var posY = this.division;
		this.ctx.drawImage(
			this.img,
			this.x, posY,
			this.img.width, this.img.height
		);
	}
}
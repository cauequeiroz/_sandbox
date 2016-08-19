function Ovni(context, img) {
	this.ctx = context;
	this.img = img;

	this.x = 0;
	this.y = 0;
	this.speed = 0;
}
Ovni.prototype = {
	update: function() {
		this.y += this.speed;
	},
	draw: function() {
		this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
	}
}
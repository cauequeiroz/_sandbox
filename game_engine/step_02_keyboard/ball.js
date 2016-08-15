function Ball(ctx) {
	this.ctx = ctx;

	this.x = 0;
	this.y = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.radius = 10;
	this.color = 'black';
}
Ball.prototype = {
	update: function() {
		// Comment colision algorithim for shotting test
		// if ( this.x < this.radius || this.x > this.ctx.canvas.width - this.radius )
		// 	this.speedX *= -1;
		// if ( this.y < this.radius || this.y > this.ctx.canvas.height - this.radius )
		// 	this.speedY *= -1;

		this.x += this.speedX;
		this.y += this.speedY;
	},
	draw: function() {
		this.ctx.save();

		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
		this.ctx.fill();

		this.ctx.restore();
	}
}
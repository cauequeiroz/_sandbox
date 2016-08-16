function Bola(context) {
	this.context = context;
	this.x = 0;
	this.x = 0;
	this.velX = 0;
	this.velY = 0;
	this.cor = 'black';
	this.raio = 10;
}
Bola.prototype = {
	atualizar: function() {
		var ctx = this.context;

		this.x += this.velX;
		this.y += this.velY;
	},
	desenhar: function() {
		var ctx = this.context;
		ctx.save();

		ctx.fillStyle = this.cor;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.raio, 0, 2*Math.PI, false);
		ctx.fill();

		ctx.restore();
	}
}
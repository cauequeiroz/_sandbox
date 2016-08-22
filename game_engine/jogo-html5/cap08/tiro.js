function Tiro(context, nave) {
	this.context = context;
	this.nave = nave;

	this.largura = 3;
	this.altura = 10;
	this.x = nave.x + 18 - this.largura/2;
	this.y = nave.y - this.altura;
	this.velocidade = 400;
	this.cor = 'yellow';
}
Tiro.prototype = {
	atualizar: function() {
		this.y -= this.velocidade * this.animacao.decorrido / 1000;

		if ( this.y < -this.altura ) {
			this.animacao.excluirSprite(this);
			this.colisor.excluirSprite(this);
		}
	},
	desenhar: function() {
		var ctx = this.context;
		ctx.save();
		ctx.fillStyle = this.cor;
		ctx.fillRect(this.x, this.y, this.largura, this.altura);
		ctx.restore();
	},
	retangulosColisao: function() {
		var rets = [{x: this.x, y: this.y, largura: this.largura, altura: this.altura}];

		// var ctx = this.context;
		// for ( var i in rets ) {
		// 	ctx.save();
		// 	ctx.strokeStyle = 'yellow';
		// 	ctx.strokeRect(rets[i].x,rets[i].y,rets[i].largura,rets[i].altura);
		// 	ctx.restore();
		// }

		return rets;
	},
	colidiuCom: function() {
		
	}
}
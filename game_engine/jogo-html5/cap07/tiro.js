function Tiro(context, nave) {
	this.context = context;
	this.nave = nave;

	this.largura = 4;
	this.altura = 20;
	this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
	this.y = nave.y - this.altura;
	this.velocidade = 10;
	this.cor = 'red';
}
Tiro.prototype = {
	atualizar: function() {
		this.y -= this.velocidade;

		if ( this.y < -this.altura ) {
			console.log('Exluindo TIRO');
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

		var ctx = this.context;
		for ( var i in rets ) {
			ctx.save();
			ctx.strokeStyle = 'yellow';
			ctx.strokeRect(rets[i].x,rets[i].y,rets[i].largura,rets[i].altura);
			ctx.restore();
		}

		return rets;
	},
	colidiuCom: function() {
		
	}
}
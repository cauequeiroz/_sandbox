function Nave(context, teclado, imagem) {
	this.context = context;
	this.imagem = imagem;
	this.teclado = teclado;

	this.x = 0;
	this.y = 0;
	this.velocidade = 0;
}
Nave.prototype = {
	atualizar: function() {
		if ( this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0 ) {
			this.x -= this.velocidade;
		}
		if ( this.teclado.pressionada(SETA_DIREITA) &&
			 this.x < this.context.canvas.width - this.imagem.width ) {
			this.x += this.velocidade;
		}
		if ( this.teclado.pressionada(SETA_ACIMA) && this.y > 0 ) {
			this.y -= this.velocidade;
		}
		if ( this.teclado.pressionada(SETA_ABAIXO) &&
			 this.y < this.context.canvas.height - this.imagem.height ) {
			this.y += this.velocidade;
		}
	},
	desenhar: function() {
		this.context.drawImage(this.imagem, this.x, this.y,
							   this.imagem.width, this.imagem.height);
	},
	atirar: function() {
		var t = new Tiro(this.context, this);
		this.animacao.novoSprite(t);
		this.colisor.novoSprite(t);
	},
	retangulosColisao: function() {
		var rets = [
			{x:this.x+2, y:this.y+19, largura:9, altura:13},
			{x:this.x+13, y:this.y+3, largura:10, altura:33},
			{x:this.x+25, y:this.y+19, largura:9, altura:13}
		];

		var ctx = this.context;
		for ( var i in rets ) {
			ctx.save();
			ctx.strokeStyle = 'yellow';
			ctx.strokeRect(rets[i].x,rets[i].y,rets[i].largura,rets[i].altura);
			ctx.restore();
		}

		return rets;
	},
	colidiuCom: function(outro) {
		if ( outro instanceof Ovni ) {
			this.animacao.desligar();
			alert('game over!');
		}
	}
}
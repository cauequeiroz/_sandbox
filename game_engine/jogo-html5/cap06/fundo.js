function Fundo(context, imagem) {
	this.context = context;
	this.imagem = imagem;
	this.posicaoEmenda = 0;
	this.velocidade = 0;
}
Fundo.prototype = {
	atualizar: function() {
		this.posicaoEmenda += this.velocidade;
		if ( this.posicaoEmenda > this.imagem.height )
			this.posicaoEmenda = 0;
	},
	desenhar: function() {
		var img = this.imagem;

		// Primeira imagem
		var posY = this.posicaoEmenda - img.height;
		this.context.drawImage(img, 0, posY, img.width, img.height);

		// Segunda imagem
		var posY = this.posicaoEmenda;
		this.context.drawImage(img, 0, posY, img.width, img.height);
	}
}
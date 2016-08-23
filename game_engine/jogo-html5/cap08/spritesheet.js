function Spritesheet(context, imagem, linhas, colunas) {
	this.context = context;
	this.imagem = imagem;
	this.numLinhas = linhas;
	this.numColunas = colunas;
	this.linha = 0;
	this.coluna = 0;
	this.intervalo = 0;
	this.fimDoCiclo = null;
}
Spritesheet.prototype = {
	proximoQuadro: function() {
		var agora = new Date().getTime();
		if ( !this.last_time ) this.last_time = agora;
		if ( agora - this.last_time < this.intervalo ) return;

		if ( this.coluna < this.numColunas - 1 ) {
			this.coluna++;
		}
		else {
			this.coluna = 0;

			if ( this.fimDoCiclo ) this.fimDoCiclo();
		}

		this.last_time = agora;
	},
	desenhar: function(x, y) {
		var largura = this.imagem.width / this.numColunas,
			altura = this.imagem.height / this.numLinhas;

		this.context.drawImage(this.imagem,
			largura*this.coluna, altura*this.linha, largura, altura,
			x, y, largura, altura
		);
	}
}
var SOM_EXPLOSAO = new Audio();
	SOM_EXPLOSAO.src = 'snd/explosao.mp3';
	SOM_EXPLOSAO.volume = 0.4;
	SOM_EXPLOSAO.load();

function Explosao(context, imagem, x, y) {
	this.context = context;
	this.imagem  = imagem;
	this.x = x;
	this.y = y;
	this.fimDaExplosao = null;

	this.spritesheet = new Spritesheet(this.context, this.imagem, 1, 5);
	this.spritesheet.intervalo = 75;

	var explosao = this;
	this.spritesheet.fimDoCiclo = function() {
		explosao.animacao.excluirSprite(explosao);
		if ( explosao.fimDaExplosao ) explosao.fimDaExplosao();
	}

	SOM_EXPLOSAO.currentTime = 0.0;
	SOM_EXPLOSAO.play();
}
Explosao.prototype = {
	atualizar: function() {

	},
	desenhar: function() {
		this.spritesheet.desenhar(this.x, this.y);
		this.spritesheet.proximoQuadro();
	}
}
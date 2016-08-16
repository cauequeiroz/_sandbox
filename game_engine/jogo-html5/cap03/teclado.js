var SETA_ESQUERDA = 37,
	SETA_DIREITA = 39,
	ESPACO = 32;

function Teclado(elemento) {
	this.elemento = elemento;
	this.pressionadas = [];
	this.disparadas = [];
	this.funcoesDisparo = [];

	var teclado = this;
	elemento.addEventListener('keydown', function(e) {
		var tecla = e.keyCode;
		teclado.pressionadas[tecla] = true;

		if ( teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla] ) {
			teclado.disparadas[tecla] = true;
			teclado.funcoesDisparo[tecla] () ;
		}
	});
	elemento.addEventListener('keyup', function(e) {
		teclado.pressionadas[e.keyCode] = false;
		teclado.disparadas[e.keyCode] = false;
	});
}
Teclado.prototype = {
	pressionada: function(tecla) {
		return this.pressionadas[tecla];
	},
	disparou: function(tecla, callback) {
		this.funcoesDisparo[tecla] = callback;
	}
}
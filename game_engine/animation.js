function Animation(ctx) {
	this.ctx = ctx;

	this.sprites = [];
	this.play = false;
	this.processList = [];
	this.spritesDel = [];
	this.processListDel = [];
	this.lastCicle = 0;
	this.timeDifference = 0;
}
Animation.prototype = {
	start: function() {
		this.lastCicle = 0;
		this.play = true;
		this.nextFrame();
	},
	stop: function() {
		this.play = false;
	},
	addSprite: function(sprite) {
		this.sprites.push(sprite);
		sprite.animation = this;
	},
	deleteSprite: function(sprite) {
		this.spritesDel.push(sprite);
	},
	clearCanvas: function() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	},
	nextFrame: function() {
		if ( !this.play ) return;

		var now = new Date().getTime();
		if ( this.lastCicle == 0 ) this.lastCicle = now;
		this.timeDifference = now - this.lastCicle;

		for ( var i in this.sprites )
			this.sprites[i].update();
		for ( var i in this.sprites )
			this.sprites[i].draw();
		for ( var i in this.processList )
			this.processList[i].process();

		this.processExclusions();

		this.lastCicle = now;

		var $this = this;
		requestAnimationFrame(function() {
			$this.nextFrame();
		});
	},
	processExclusions: function() {
		var newSprites = [];
		var newProcessList = [];

		for ( var i in this.sprites ) {
			if ( this.spritesDel.indexOf(this.sprites[i]) == -1 ) {
				newSprites.push(this.sprites[i]);
			}
		}
		for ( var i in this.processList ) {
			if ( this.processListDel.indexOf(this.processList[i]) == -1 ) {
				newProcessList.push(this.processList[i]);
			}
		}

		this.spritesDel = [];
		this.processListDel = [];
		this.sprites = newSprites;
		this.processList = newProcessList;
	},
	addProcess: function(process) {
		this.processList.push(process);
		process.animation = this;
	},
	deleteProcess: function(process) {
		this.processListDel.push(process);
	}
}
function Collision() {
	this.sprites = [];
	this.anyCollision = null;
	this.spritesDel = [];
}
Collision.prototype = {
	addSprite: function(sprite) {
		this.sprites.push(sprite);
		sprite.collision = this;
	},
	deleteSprite: function(sprite) {
		this.spritesDel.push(sprite);
	},
	process: function() {
		var tested = new Object();

		for ( var i in this.sprites ) {
			for ( var j in this.sprites ) {
				if ( i === j ) continue;

				var id1 = this.toStr(this.sprites[i]),
					id2 = this.toStr(this.sprites[j]);

				if ( !tested[id1] ) tested[id1] = [];
				if ( !tested[id2] ) tested[id2] = [];

				if ( !( tested[id1].indexOf(id2) >= 0 || tested[id2].indexOf(id1) >= 0)) {
					this.testCollision(this.sprites[i], this.sprites[j]);	

					tested[id1].push(id2);
					tested[id2].push(id1);
				}				
			}
		}

		this.processExclusions();
	},
	processExclusions: function() {
		var newSprite = [];

		for ( var i in this.sprites ) {
			if ( this.spritesDel.indexOf(this.sprites[i]) == -1 ) {
				newSprite.push(this.sprites[i]);
			}
		}

		this.spritesDel = [];
		this.sprites = newSprite;
	},
	testCollision: function(sprite1, sprite2) {
		var rects1 = sprite1.getRects(),
			rects2 = sprite2.getRects();

		collision:
		for ( var i in rects1 ) {
			for ( var j in rects2 ) {
				if ( this.hasCollided(rects1[i], rects2[j]) ) {
					sprite1.collidedWith(sprite2);
					sprite2.collidedWith(sprite1);

					if ( this.anyCollision ) this.anyCollision(sprite1, sprite2);

					break collision;
				}
			}
		}
	},
	hasCollided: function(rect1, rect2) {
		return (rect1.x + rect1.width) > rect2.x &&
			   rect1.x < (rect2.x + rect2.width) &&
			   (rect1.y + rect1.height) > rect2.y &&
			   rect1.y < (rect2.y + rect2.height);
	},
	toStr: function(sprite) {
		var str = '',
			rects = sprite.getRects();

		for ( var i in rects ) {
			str += 'x:'+rects[i].x+','+
			       'y:'+rects[i].y+','+
			       'w:'+rects[i].width+','+
			       'h:'+rects[i].height+'\n';
		}

		return str;
	}
}
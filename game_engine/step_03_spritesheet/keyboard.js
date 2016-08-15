var KEY_LEFT  = 37,
	KEY_RIGHT = 39,
	KEY_SPACE = 32;

function Keyboard(element) {
	this.key_press   = [];
	this.key_tap     = [];
	this.key_actions = [];

	var $this = this;
	element.addEventListener('keydown', function(e) {
		$this.key_press[e.keyCode] = true;

		if ( !$this.key_tap[e.keyCode] && $this.key_actions[e.keyCode] ) {
			$this.key_actions[e.keyCode] () ;
			$this.key_tap[e.keyCode] = true;
		}
	});
	element.addEventListener('keyup', function(e) {
		$this.key_press[e.keyCode] = false;
		$this.key_tap[e.keyCode] = false;
	});
}
Keyboard.prototype = {
	pressed: function(key) {
		return this.key_press[key];
	},
	tap: function(key, callback) {
		this.key_actions[key] = callback;
	}
}
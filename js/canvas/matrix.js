function canvasSupport(n) {
	return !!n.getContext;
}
function canvasApp() {
	if (document.getElementById('myCanvas')) {
		var canvasElement = document.getElementById('myCanvas');
		canvasElement.parentNode.removeChild(canvasElement);
	}
	var Game_Interval;
	var winwidth = Math.max(window.screen.width, window.innerWidth);
	var matrixwidth = winwidth / 10;
	var nodecimal = Math.round(matrixwidth);
	var n = document.createElement('canvas');
	n.id = 'myCanvas';
	n.classList = 'background';
	document.getElementById('canvasContainer').appendChild(n);
	if (canvasSupport(n)) {
		var e = n.getContext('2d');
		var	t = (n.width = window.innerWidth);
		var	a = (n.height = window.innerHeight);
		var	i = Array(nodecimal).join(0).split('');
		'undefined' != typeof Game_Interval && clearInterval(Game_interval), (Game_Interval = setInterval(o, 42));
	}
	function o() {
		(e.fillStyle = 'rgba(0,0,0,.07)'), e.fillRect(0, 0, t, a), (e.fillStyle = color), (e.font = '10px monospace');
		i.map(function(n, t) {
			(text = [...Array(1)].map(() => Math.random().toString(36)[2]).join('').toUpperCase()),
			(x = (t * 10) + 10),
			e.fillText(text, x, n),
			n > 100 + 3e4 * Math.random() ? (i[t] = 0) : (i[t] = n + 10);
		});
	}
}
canvasApp();

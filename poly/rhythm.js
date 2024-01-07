var d1 = 15 * 135, d2 = 16 * 135;
var p1 = 0., p2 = 0.;

var start;

function tick() {
	const now = (Date.now() - start) * 1.6;
	
	document.getElementById("f1").innerHTML = (Math.floor(now * 3 / d1) % 3) + 1;
	document.getElementById("f2").innerHTML = (Math.floor(now * 3 / d2) % 3) + 1;
}

function start() {
	start = Date.now();
	setInterval(tick, 5);
}

setTimeout(start, 2500);

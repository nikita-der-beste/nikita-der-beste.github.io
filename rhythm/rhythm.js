var d1 = 15 * 135, d2 = 16 * 135;
var p1 = 0., p2 = 0.;

var start;

function tick() {
	const now = (Date.now() - start) * 1.6;
	
	document.getElementById("ln1").style.marginTop = ((80 * (now % d1) / (1. * d1)) + "vh");
	document.getElementById("ln2").style.marginTop = ((80 * (now % d2) / (1. * d2)) + "vh");
}

function start() {
	start = Date.now();
	setInterval(tick, 5);
}

setTimeout(start, 2500);

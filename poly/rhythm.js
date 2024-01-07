var d1 = 15 * 135, d2 = 16 * 135;
var p1 = 0., p2 = 0.;

var start;

function tick() {
	const now = (Date.now() - start) * 1.38;
	
	document.getElementById("f1").innerHTML = (Math.floor(now * 3 / d1) % 3) + 1;
											//+ (((Math.floor(now * 12 / d1) % 4) == 0) ? "." : "");
	//document.getElementById("f1").style.marginTop = Math.floor(10. - 10. * ((now * 3 / d1) % 1)) + "vh";
	document.getElementById("f2").innerHTML = (Math.floor(now * 3 / d2) % 3) + 1;
											//+ (((Math.floor(now * 12 / d2) % 4) == 0) ? "." : "");
	
}

function start() {
	alert("Start");
	start = Date.now();
	setInterval(tick, 5);
}

start();
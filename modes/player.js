function rand_int(max) {
	return Math.floor(Math.random() * max);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function get_note_type(i) {
	switch (i % 12) {
		case 0: return 'A';
		case 1: return 'Bb';
		case 2: return 'B';
		case 3: return 'C';
		case 4: return 'Db';
		case 5: return 'D';
		case 6: return 'Eb';
		case 7: return 'E';
		case 8: return 'F';
		case 9: return 'Gb';
		case 10: return 'G';
		case 11: return 'Ab';
	}
}

function get_note_octave(i) {
	return Math.floor((i + 9) / 12);
}

function get_note_name(i) {
	return get_note_type(i) + get_note_octave(i);
}

var init = false;
var audio1, audio2;

async function play_note1(i) {
	if (!init) {
		audio1 = new Audio();
		audio2 = new Audio();
		init = true;
	}
	audio1.src = 'piano-mp3/' + get_note_name(i) + '.mp3';
	audio1.load();
	await sleep(800);

	audio1.play();
	//audio.load();
	//audio.play();

	await sleep(1300);
	audio1.pause();
}

async function play_note2(i) {
	if (!init) {
		audio1 = new Audio();
		audio2 = new Audio();
		init = true;
	}
	audio2.src = 'piano-mp3/' + get_note_name(i) + '.mp3';
	audio2.load();
	await sleep(800);

	audio2.play();
	//audio.load();
	//audio.play();

	await sleep(1300);
	audio2.pause();
}
const ionian = [2, 2, 1, 2, 2, 2, 1];

async function play_mode(m, t) {
	document.getElementById("antwort").innerHTML = "Kirchentonart wird gespielt..";
	for (var i = 0; i < 7; ++i) {
		if (i % 2 == 0)
			play_note1(t);
		else
			play_note2(t);
		t += ionian[(i + m) % 7];
		await sleep(1250);
	}
	play_note2(t);

	await sleep(2500);
	document.getElementById("again").style.visibility = "visible";
        document.getElementById("end").style.visibility = "visible";
	document.getElementById("antwort").innerHTML = "";
	if (gd == true) {
		aufdecken();
	}
}

var last_m = 0;
var last_t = 0;

var gd = false;

function play_again() {
	document.getElementById("again").style.visibility = "hidden";
        document.getElementById("end").style.visibility = "hidden";
	play_mode(last_m, last_t);
}

function play_random() {
	gd = false;
	last_m = rand_int(6);
	last_t = rand_int(20) + 20;
	
	document.getElementById("antwort").innerHTML = '';

	document.getElementById("rand").style.visibility = "hidden";

	play_again();


}

function aufdecken() {
	var m;
	switch (last_m) {
		case 0: m = "Jonisch"; break;
		case 1: m = "Dorisch"; break;
		case 2: m = "Phrygisch"; break;
		case 3: m = "Lydisch"; break;
		case 4: m = "Mixolydisch"; break;
		case 5: m = "Aeolisch"; break;
	}

	document.getElementById("antwort").innerHTML = "Es war: " + m;

	document.getElementById("rand").style.visibility = "visible";
	gd = true;
        document.getElementById("end").style.visibility = "hidden";
}


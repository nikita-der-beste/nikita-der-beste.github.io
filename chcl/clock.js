var curr = 'none';

var time_white = 60 * 10;
var time_black = 60 * 10;
var added = 0;

var paused = false;

function time_text(time) {
    var mins = Math.floor(time / 60);
    var secs = (time - mins * 60).toString();
    if (secs.length < 2) {
        secs = '0' + secs;
    }
    return mins.toString() + ':' + secs;
}

function increment() {
    if (paused)
        return;
    if (curr == 'white') {
        time_white -= 1;
        document.getElementById('b1').innerHTML = time_text(time_white);
        if (time_white <= 0)
            document.getElementById('body').innerHTML = "<h1> BLACK WINS (on time) </h1>";
    } else if (curr == 'black') {
        time_black -= 1;
        document.getElementById('b2').innerHTML = time_text(time_black);
        if (time_black <= 0)
            document.getElementById('body').innerHTML = "<h1> WHITE WINS (on time) </h1>";
    }
}

function initfn() {
    var url_string = window.location.href;
    var url = new URL(url_string);

    var time = +url.searchParams.get("time");
    var inc = +url.searchParams.get("increment");

    if (time > 0) {
        time_white = time;
        time_black = time;
    }
    if (inc > 0) {
        added = inc;
    }

    document.getElementById('b1').innerHTML = time_text(time_white);
    document.getElementById('b2').innerHTML = time_text(time_black);

    setInterval(increment, 1000);
}

function press(from) {
    paused = false;
    if (curr != from && curr != 'none')
        return;
    if (from == 'white') {
        curr = 'black';
        document.getElementById('b1').style.backgroundColor = 'darkgrey';
        document.getElementById('b1').style.color = 'grey';
        document.getElementById('b2').style.backgroundColor = 'lightcoral';
        document.getElementById('b2').style.color = 'darkred';
        time_white += added;
        document.getElementById('b1').innerHTML = time_text(time_white);
    } else if (from == 'black') {
        curr = 'white';
        document.getElementById('b1').style.backgroundColor = 'whitesmoke';
        document.getElementById('b1').style.color = 'red';
        document.getElementById('b2').style.backgroundColor = 'brown';
        document.getElementById('b2').style.color = 'grey';
        time_black += added;
        document.getElementById('b2').innerHTML = time_text(time_black);
    }
}

function pause() {
    paused = !paused;
    if (paused) {
        document.getElementById('pause').style.backgroundColor = 'gold';
        document.getElementById('pause').style.color = 'black';
        document.getElementById('pause').innerHTML = '▷';
    } else {
        document.getElementById('pause').style.backgroundColor = 'black';
        document.getElementById('pause').style.color = 'gold';
        document.getElementById('pause').innerHTML = '||';
    }
}

var init = initfn();

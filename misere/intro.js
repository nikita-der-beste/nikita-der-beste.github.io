var nfinp = document.getElementById("numfields");
var invalid = document.getElementById("invalid");
var invstate = false;

function nfUpdate() {
    if (isInt(nfinp.value)) {
        nfinp.style.backgroundColor = "rgb(205, 238, 156)"
        invout();
    } else
        nfinp.style.backgroundColor = "rgb(221, 144, 139)";
}

function play() {
    if (isInt(nfinp.value))
        window.location.href = "game.html?nf=" + nfinp.value;
    else
        invin();
}

function invin() {
    if (invstate)
        return;
    invstate = true;

    var i = 1;
    var interval = setInterval(function() {
        if (++i === 10) {
            invalid.style.color = "rgba(220, 27, 20, 1.0)";
            window.clearInterval(interval);
        } else
            invalid.style.color = "rgba(220, 27, 20, 0." + i + ")";
    }, 20);
}

function invout() {
    if (!invstate)
        return;
    invstate = false;

    var i = 0;
    var interval = setInterval(function() {
        if (++i === 9) {
            invalid.style.color = "rgba(220, 27, 20, 0.0)";
            window.clearInterval(interval);
        } else
            invalid.style.color = "rgba(220, 27, 20, 0." + (9 - i) + ")";
    }, 20);
}
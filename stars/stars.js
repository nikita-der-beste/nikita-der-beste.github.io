var nos = 0,
    to_nos = 0;
var full = true,
    to_full = 0;

function updateStars() {
    for (var i = 1; i <= 5; ++i) {
        var els = document.getElementsByClassName(i);
        if (i <= nos) {
            els[0].src = "full.png";
            els[1].src = "full.png";
        } else if (i <= to_nos) {
            els[0].src = "show.png";
            els[1].src = "show.png";
        } else {
            els[0].src = "star.png";
            els[1].src = "star.png";
        }
    }

    if (nos > 0 && !full) {
        if (to_nos >= nos)
            document.getElementsByClassName(nos)[1].src = "show.png";
        else
            document.getElementsByClassName(nos)[1].src = "star.png";
    }

    if (to_nos > 0 && !to_full)
        if (!document.getElementsByClassName(to_nos)[1].src.includes("full.png"))
            document.getElementsByClassName(to_nos)[1].src = "star.png";

    if (nos > 0)
        document.getElementById("nos").innerHTML = full ? nos + ".0" : nos - 1 + ".5";
}

function choose(_nos, _full) {
    nos = _nos;
    full = _full;
    updateStars();
}

function hover(_nos, _full) {
    to_nos = _nos;
    to_full = _full;
    updateStars();
}

function fn_add() {
    if (!full)
        full = true
    else if (nos < 5) {
        ++nos;
        full = false;
    }

    updateStars();
}

function fn_sub() {
    if (full)
        full = false
    else if (nos > 1) {
        --nos;
        full = true;
    }

    updateStars();
}

function getimg() {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const src = urlParams.get("img");
    console.log(src);

    document.getElementById("rateme").src = src;
}

function create() {
    window.location.href = "create.html";
}
var moveCount = 0;
var lostCount = 0;

function checkField(fld) {
    var a1 = document.getElementById("a1" + "_" + fld).innerHTML == "X";
    var a2 = document.getElementById("a2" + "_" + fld).innerHTML == "X";
    var a3 = document.getElementById("a3" + "_" + fld).innerHTML == "X";
    var b1 = document.getElementById("b1" + "_" + fld).innerHTML == "X";
    var b2 = document.getElementById("b2" + "_" + fld).innerHTML == "X";
    var b3 = document.getElementById("b3" + "_" + fld).innerHTML == "X";
    var c1 = document.getElementById("c1" + "_" + fld).innerHTML == "X";
    var c2 = document.getElementById("c2" + "_" + fld).innerHTML == "X";
    var c3 = document.getElementById("c3" + "_" + fld).innerHTML == "X";

    return (a1 && a2 && a3) || (b1 && b2 && b3) || (c1 && c2 && c3) ||
        (a1 && b1 && c1) || (a2 && b2 && c2) || (a3 && b3 && c3) ||
        (a1 && b2 && c3) || (a3 && b2 && c1);
}

function cross(bttn, fld) {
    var button = document.getElementById(bttn + "_" + fld);
    var field = document.getElementById("fld_" + fld);

    if (button.classList.contains("lost") || button.innerHTML == "X")
        return;

    button.innerHTML = "X";
    ++moveCount;

    if (checkField(fld)) {
        Array.from(field.getElementsByClassName("square")).forEach(element => {
            element.classList.add("lost");
        });;
        if (++lostCount == numfields) {
            document.getElementById("moves").innerHTML = "The game lasted " + moveCount + " moves across " + (lostCount == 1 ? "one board." : (lostCount + " boards."));
            document.getElementById("gameover").style.visibility = "visible";
        }
    }
}

function reload() {
    window.location.href = "game.html?nf=" + numfields;
}

function loadIndex() {
    window.location.href = "index.html";
}

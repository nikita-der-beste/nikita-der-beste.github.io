var numfields = 0;
var board = document.getElementById("board");

window.onload = init;

function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results)
        return null;
    if (!results[2])
        return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function init() {
    // retrive nf parameter.
    var nf = getParameterByName("nf");
    if (!isInt(nf)) {
        // window.location.href = "index.html";
        numfields = 3;
        // return;
    } else
        numfields = parseInt(nf);

    // generate fields.
    var i = numfields;
    for (; i >= 3; i -= 3)
        board.innerHTML += stack3.replace(/\?/g, i);

    if (i == 2)
        board.innerHTML += stack2.replace(/\?/g, i);
    else if (i == 1)
        board.innerHTML += stack1.replace(/\?/g, i);
}
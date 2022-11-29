function goooo() {
    var mins = document.getElementById('mins').value;
    var secs = document.getElementById('secs').value;
    var incs = document.getElementById('incs').value;
    if (secs < 60 && secs >= 0 && mins >= 0 && incs >= 0) {
        window.location.href = "game.html?time=" + (+mins * 60 + +secs) + "&increment=" + incs;
    }
}
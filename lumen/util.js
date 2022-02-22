function getId(name) {
    return document.getElementById(name);
}

function getClass(name) {
    return document.getElementsByClassName(name);
}

function keepNorm(val) {
    return Math.max(Math.min(val, 1.0), 0.0);
}
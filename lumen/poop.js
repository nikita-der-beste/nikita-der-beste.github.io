shit = false;

function poop() {
    if (shit)
        return;
    shit = true;

    getId("meow").style.visibility = "visible";
    getId("poop").play();
    setTimeout(unpoop, 2000);
}

function unpoop() {
    getId("meow").style.visibility = "hidden";
    setTimeout(repoop, 1000);
}

function repoop() {
    shit = false;
}
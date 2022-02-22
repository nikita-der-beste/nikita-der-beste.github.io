var b = true;
var f = 1;

setInterval(opacity, 80);

function opacity() {
    var i1 = getClass("img1");
    var i2 = getClass("img2");


    if (b) {
        if (f < 0.0) {
            b = false;

            for (var i = 0; i < i2.length; ++i)
                i2.item(i).src = 'lumen/imgs/' + (Math.floor(Math.random() * 43) + 1) + '.jpg';
        } else
            f -= 0.02;
    } else {
        if (f > 1.0) {
            b = true;

            for (var i = 0; i < i1.length; ++i)
                i1.item(i).src = 'lumen/imgs/' + (Math.floor(Math.random() * 43) + 1) + '.jpg';
        } else
            f += 0.02;
    }

    for (var i = 0; i < i1.length; ++i)
        i1.item(i).style.opacity = 1 - keepNorm(f);

    for (var i = 0; i < i2.length; ++i)
        i2.item(i).style.opacity = keepNorm(f);
}
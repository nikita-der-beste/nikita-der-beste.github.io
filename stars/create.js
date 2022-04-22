function testImage(url, suc, err) {

    new Promise(function(resolve, reject) {
        var timeout = 5000;
        var timer, img = new Image();
        img.onerror = img.onabort = function() {
            clearTimeout(timer);
            reject("error");
            err();
        };
        img.onload = function() {
            clearTimeout(timer);
            resolve("success");
            suc();
        };
        timer = setTimeout(function() {
            // reset .src to invalid URL so it stops previous
            // loading, but doesn't trigger new load
            img.src = "//!!!!/test.jpg";
            reject("timeout");
        }, timeout);
        img.src = url;
    }).then((ret) => {
        if (ret)
            suc();
        else
            err();
    });

}

function make() {
    var link = document.getElementById("link").value;
    testImage(link,
        function() { window.location.href = "https://nikita-der-beste.github.io/stars?img=" + link; },
        invin);
}

var invalid = document.getElementById("invalid");

function invin() {
    var i = 1;
    var interval = setInterval(function() {
        if (++i === 10) {
            invalid.style.color = "rgba(220, 27, 20, 1.0)";
            window.clearInterval(interval);
        } else
            invalid.style.color = "rgba(220, 27, 20, 0." + i + ")";
    }, 20);
}

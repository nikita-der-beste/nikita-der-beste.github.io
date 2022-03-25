var catimg = document.getElementById("catimg");

function getCat() {
    getAPI("https://aws.random.cat/meow", cat => {
        catimg.src = cat.file;
    });
}
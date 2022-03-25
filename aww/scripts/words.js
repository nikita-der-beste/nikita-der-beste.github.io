var word = document.getElementById("word");

function getWord() {
    word.innerHTML = dict[Math.floor(Math.random() * dict.length)];
}
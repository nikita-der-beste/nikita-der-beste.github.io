var joke = document.getElementById("joke");

function getJoke() {
    // JokeAPI.getJokes().then(r => console.log(r.body))
    JokeAPI.getJokes({
            jokeType: "single"
        })
        .then((r) => r.json())
        .then((data) => {
            console.log(data.joke);
            joke.innerHTML = data.joke;
        });
}
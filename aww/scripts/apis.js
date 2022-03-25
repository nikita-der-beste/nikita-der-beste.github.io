function getAPI(link, lambda) {
    return fetch(link).then(response => response.json()).then(lambda);
}
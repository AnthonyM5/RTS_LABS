const searchQuery = (query) => {
    return fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

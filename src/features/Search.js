export const searchQuery = (query) => {
    return fetch("http://hn.algolia.com/api/v1/search?query=\n")
    .then(res => res.json())
    .then(data => console.log(data))
}
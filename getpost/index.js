function dataPrint(fetchedData) {
    for(let i of fetchedData) {
        let divElement = document.createElement("div");
        divElement.classList.add("each-div")
        rootElement.appendChild(divElement)

        let titleElement = document.createElement("h4");
        titleElement.textContent = i.title
        divElement.appendChild(titleElement)

        let bodyElement = document.createElement("p");
        bodyElement.textContent = i.body
        divElement.appendChild(bodyElement)
        console.log(i);
    }
}

const rootElement = document.getElementById("main-root")

function dataFetch() {
    rootElement.innerHTML = ""
    const url = "https://jsonplaceholder.typicode.com/posts"

    const data = fetch(url)
    data
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        dataPrint(jsonData)
    })

}
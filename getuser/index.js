function dataPrint(fetchedData) {

    let tableElement = document.createElement("table")
    rootElement.appendChild(tableElement)

    let trElement = document.createElement("tr")
    trElement.id = "header-row"
    tableElement.appendChild(trElement)

    let SNoElement = document.createElement("th")
    SNoElement.textContent = "S.No"
    SNoElement.classList.add("each-row-data")
    trElement.appendChild(SNoElement)

    let NameElement = document.createElement("th")
    NameElement.textContent = "Name"
    trElement.appendChild(NameElement)

    let EmailElement = document.createElement("th")
    EmailElement.textContent = "Email"
    trElement.appendChild(EmailElement)

    let UsernameElement = document.createElement("th")
    UsernameElement.textContent = "Username"
    trElement.appendChild(UsernameElement)
    
    let PhoneElement = document.createElement("th")
    PhoneElement.textContent = "Phone"
    trElement.appendChild(PhoneElement)

    let WebsiteElement = document.createElement("th")
    WebsiteElement.textContent = "Website"
    trElement.appendChild(WebsiteElement)


    for(let i of fetchedData) {
        console.log(i);

        let trElement = document.createElement("tr")
        tableElement.appendChild(trElement)

        let SNoElement = document.createElement("td")
        SNoElement.textContent = i.id
        SNoElement.classList.add("each-row-data")
        trElement.appendChild(SNoElement)

        let NameElement = document.createElement("td")
        NameElement.textContent = i.name
        trElement.appendChild(NameElement)

        let EmailElement = document.createElement("td")
        EmailElement.textContent = i.email
        trElement.appendChild(EmailElement)

        let UsernameElement = document.createElement("td")
        UsernameElement.textContent = i.username
        trElement.appendChild(UsernameElement)
    
        let PhoneElement = document.createElement("td")
        PhoneElement.textContent = i.phone
        trElement.appendChild(PhoneElement)

        let WebsiteElement = document.createElement("td")
        WebsiteElement.textContent = i.website
        trElement.appendChild(WebsiteElement)

        
    }
}

let rootElement = document.getElementById("main-root")

function dataFetch() {
    rootElement.innerHTML = ""

    const url = "https://jsonplaceholder.typicode.com/users"

    const data = fetch(url)
    data
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        dataPrint(jsonData)
    })
}
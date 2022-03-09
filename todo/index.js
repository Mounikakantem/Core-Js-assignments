let addBtn = document.getElementById("addButton")
let todosContainer = document.getElementById("todosContainer");

let todosList = [
    {
        labelText: "Learn JavaScript",
        uniqueNo: 1
    }
]

addBtn.onclick = function() {
    let userInput = document.getElementById("userInput");

    if (addBtn.textContent === "Add") {
        id = todosList.length + 1
        if (userInput.value !== "") {
            updatingTodoList(userInput.value)
            userInput.value = ""
        }
    }else{
        let id = addBtn.value
            todosList = todosList.map(obj => {
                if (obj.uniqueNo == id) {
                    return {...obj, labelText: userInput.value};
                }
                    return obj;
             });
        renderTodoList()
        addBtn.textContent = "Add"
         userInput.value = ""
        
     }
    
}


function createTodo(todo) {
    let liElement = document.createElement("li")
    liElement.classList.add("list-item")
    todosContainer.appendChild(liElement)

    let spanElement = document.createElement("span")
    spanElement.textContent = todo.uniqueNo + "."
    liElement.appendChild(spanElement)

    let paragraph = document.createElement("p")
    paragraph.textContent = todo.labelText;
    paragraph.classList.add("m-0")
    liElement.appendChild(paragraph)

    let btnsContainer = document.createElement("div")
    liElement.appendChild(btnsContainer)

    let removeBtn = document.createElement("button")
    removeBtn.classList.add("btn",  "m-2" , "btn-danger")
    removeBtn.textContent = "Delete"
    removeBtn.onclick = function() {
        todosContainer.removeChild(liElement)
        todosList = todosList.filter(element => element.uniqueNo !== todo.uniqueNo)
        onremove(todosList)
        console.log(todosList);
    }
    btnsContainer.appendChild(removeBtn)

    let editBtn = document.createElement("button")
    editBtn.classList.add("btn", "btn-success", "m-2")
    editBtn.textContent = "Edit"
    editBtn.onclick = function() {
        userInput.value = todo.labelText
        addBtn.textContent = "Update"
        addBtn.value = todo.uniqueNo;
    }
    btnsContainer.appendChild(editBtn)
}
function renderTodoList() {
    todosContainer.innerHTML = "";
    for (let i of todosList) {
        createTodo(i)
    }
}
function updatingTodoList(inputValue) {
    todosContainer.innerHTML = ""
    let newTodo = {
        labelText: inputValue,
        uniqueNo: todosList.length  + 1
    }
    todosList.push(newTodo)
    for (let i of todosList) {
        createTodo(i)
    }
}
function onremove(todosList) {
    console.log(todosList);
    todosList.filter(ele => ele.uniqueNo = todosList.indexOf(ele) + 1)
}
for (let i of todosList) {
    createTodo(i)
}
 
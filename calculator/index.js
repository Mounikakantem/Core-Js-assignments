let inputElement = document.getElementById("value")
let buttonsContElement = document.getElementById("buttons")
let inputErrorElement = document.getElementById("input-error")
let unOrderListElement = document.getElementById("history")

let output = ""
let listData = ""

function onClickBtns(id) {
    inputErrorElement.textContent = ""
    let clickedElement = document.getElementById(id).textContent
    if (clickedElement == "x") {
        inputElement.value += clickedElement
        output += "*"
    }else if (clickedElement == "^") {
        inputElement.value += clickedElement
        output += "**"
    } else { 
        inputElement.value += clickedElement
        output += clickedElement
    }
} 
//------------All clear------------
function onClickAllClear() {
    output = ""
    inputElement.value = ""
    console.log(inputElement.value);
}
//-----------Delete--------------
function onClickDelete() {
    console.log( output);
    if (output.length >= 1) {
        output =  output.substring(0, output.length-1)
        inputElement.value = output
        console.log( output)
    }
}

function onClickEqual() {
    try{
        listData = output
        inputElement.value = eval(output)
        output = (eval(output)).toString()
        listData += " = " + output
        let liElement = document.createElement("li")
        liElement.classList.add("each-li")
        console.log(listData);
        liElement.textContent = listData
        unOrderListElement.appendChild(liElement)

    }catch(e) {
        inputElement.value = ""
        output = ""
        clickedElement.textContent = "Please enter valid expression"
    }
}


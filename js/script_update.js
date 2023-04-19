getIngredientsJSON = JSON.parse(localStorage.getItem("ingredientsJSON"))

function ingredientsUpdateFn() {
    div = document.querySelector('div.main')
    for (const a in getIngredientsJSON) {
        var newDiv = document.createElement("div")
        var br = document.createElement("br")
        var buttonIncrement = document.createElement("button")
        var buttonDecrement = document.createElement("button")
        var text = document.createElement("p")
        text.textContent = getIngredientsJSON[a].Quantity
        buttonIncrement.onclick = function() {textIncrement(this)}
        buttonIncrement.className = "increment"
        buttonIncrement.textContent = "+"
        buttonDecrement.onclick = function() {textDecrement(this)}
        buttonDecrement.className = "decrement"
        buttonDecrement.textContent = "-"
        div.appendChild(newDiv)
        newDiv.appendChild(buttonIncrement)
        newDiv.appendChild(text)
        newDiv.appendChild(buttonDecrement)
        newDiv.appendChild(br)
    }
}

function textIncrement(a) {
    a.nextSibling.textContent = parseInt(a.nextSibling.textContent) + 1
    count = 0
    document.querySelectorAll('.increment').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity++
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
}

function textDecrement(a) {
    a.previousSibling.textContent = parseInt(a.previousSibling.textContent) - 1
    count = 0
    document.querySelectorAll('.decrement').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity--
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
}

function display() {
    console.log(getIngredientsJSON)
}
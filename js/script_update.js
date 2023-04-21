getIngredientsJSON = JSON.parse(localStorage.getItem("ingredientsJSON"))

function ingredientsUpdateFn() {
    div = document.querySelector('div.main')
    for (const a in getIngredientsJSON) {
        var newDiv = document.createElement("div")
        var br = document.createElement("br")
        var buttonIncrement = document.createElement("button")
        var buttonDecrement = document.createElement("button")
        var buttonIncrementTen = document.createElement("button")
        var buttonDecrementTen = document.createElement("button")
        var buttonIncrementHundred = document.createElement("button")
        var buttonDecrementHundred = document.createElement("button")
        var text = document.createElement("p")
        var category = document.createElement("p")
        text.textContent = getIngredientsJSON[a].Quantity
        text.className = "quantity"
        category.textContent = getIngredientsJSON[a].Ingredients
        buttonIncrement.onclick = function() {textIncrement(this)}
        buttonIncrement.className = "increment"
        buttonIncrement.textContent = "+1"
        buttonDecrement.onclick = function() {textDecrement(this)}
        buttonDecrement.className = "decrement"
        buttonDecrement.textContent = "-1"
        buttonIncrementTen.onclick = function() {textIncrementTen(this)}
        buttonIncrementTen.className = "incrementTen"
        buttonIncrementTen.textContent = "+10"
        buttonDecrementTen.onclick = function() {textDecrementTen(this)}
        buttonDecrementTen.className = "decrementTen"
        buttonDecrementTen.textContent = "-10"
        buttonIncrementHundred.onclick = function() {textIncrementHundred(this)}
        buttonIncrementHundred.className = "incrementHundred"
        buttonIncrementHundred.textContent = "+100"
        buttonDecrementHundred.onclick = function() {textDecrementHundred(this)}
        buttonDecrementHundred.className = "decrementHundred"
        buttonDecrementHundred.textContent = "-100"
        div.appendChild(newDiv)
        newDiv.appendChild(buttonDecrementHundred)
        newDiv.appendChild(buttonDecrementTen)
        newDiv.appendChild(buttonDecrement)
        newDiv.appendChild(text)
        newDiv.appendChild(buttonIncrement)
        newDiv.appendChild(buttonIncrementTen)
        newDiv.appendChild(buttonIncrementHundred)
        newDiv.appendChild(category)
        newDiv.appendChild(br)
    }
    checkIngredientsRemaining()
}

function checkIngredientsRemaining() {
    document.querySelectorAll('.quantity').forEach(a => {
        if (parseInt(a.textContent) <= 100) {
            a.style.color = "#dd3333"
        }
        if (parseInt(a.textContent) > 100) {
            a.style.color = "#000000"
        }
    })
}

function textIncrement(a) {
    a.previousSibling.textContent = parseInt(a.previousSibling.textContent) + 1
    count = 0
    document.querySelectorAll('.increment').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity++
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
    checkIngredientsRemaining()
}

function textDecrement(a) {
    a.nextSibling.textContent = parseInt(a.nextSibling.textContent) - 1
    count = 0
    document.querySelectorAll('.decrement').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity--
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
    checkIngredientsRemaining()
}

function textIncrementTen(a) {
    a.previousSibling.previousSibling.textContent = parseInt(a.previousSibling.previousSibling.textContent) + 10
    count = 0
    document.querySelectorAll('.incrementTen').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity = getIngredientsJSON[count].Quantity + 10
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
    checkIngredientsRemaining()
}

function textDecrementTen(a) {
    a.nextSibling.nextSibling.textContent = parseInt(a.nextSibling.nextSibling.textContent) - 10
    count = 0
    document.querySelectorAll('.decrementTen').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity = getIngredientsJSON[count].Quantity - 10
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
    checkIngredientsRemaining()
}

function textIncrementHundred(a) {
    a.previousSibling.previousSibling.previousSibling.textContent = parseInt(a.previousSibling.previousSibling.previousSibling.textContent) + 100
    count = 0
    document.querySelectorAll('.incrementTen').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity = getIngredientsJSON[count].Quantity + 100
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
    checkIngredientsRemaining()
}

function textDecrementHundred(a) {
    a.nextSibling.nextSibling.nextSibling.textContent = parseInt(a.nextSibling.nextSibling.nextSibling.textContent) - 100
    count = 0
    document.querySelectorAll('.decrementTen').forEach(b => {
        if (a == b) {
            getIngredientsJSON[count].Quantity = getIngredientsJSON[count].Quantity - 100
            localStorage.setItem("ingredientsJSON", getIngredientsJSON)
        }
        count++
    })
    checkIngredientsRemaining()
}

function display() {
    console.log(getIngredientsJSON)
}

function checkLogin(a) {
    userPassword = document.querySelector('.login_panel div .member_login_password').value
    validLogin = false
    if (a.parentElement.classList.length == 2) {
        a.classList.remove("invalid")
        document.querySelector('.invalid_login').remove()
    }
    if (userPassword == "SEHH3140") {
        validLogin = true
        document.querySelector('.main').style.display = 'block'
        document.querySelector('.member_login').style.display = 'none'
    }
    if (validLogin == false) {
        var newDiv = document.createElement("div")
        var newP = document.createElement("p")
        newDiv.className = "invalid_login"
        newP.textContent = "Invalid member ID or Password, please try again"
        newP.style.color = "#f52323"
        newDiv.appendChild(newP)
        a.parentElement.before(newDiv)
        a.parentElement.classList.add("invalid")
    }
}
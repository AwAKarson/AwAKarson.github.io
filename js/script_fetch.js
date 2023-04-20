fetch('../text/drinks.json')
    .then(resultDrinks => resultDrinks.json())
    .then(function(data) {
        localStorage.setItem("drinksJSON", JSON.stringify(data))
    })
fetch('../text/promo_code.json')
    .then(resultPromo => resultPromo.json())
    .then(function(data) {
        localStorage.setItem("promoJSON", JSON.stringify(data))
    })
fetch('../text/member.json')
    .then(resultMember => resultMember.json())
    .then(function(data) {
        localStorage.setItem("memberJSON", JSON.stringify(data))
    })
fetch('../text/food.json')
    .then(resultPromo => resultPromo.json())
    .then(function(data) {
        localStorage.setItem("foodJSON", JSON.stringify(data))
    })
fetch('../text/ingredients.json')
    .then(resultIngredients => resultIngredients.json())
    .then(function(data) {
        localStorage.setItem("ingredientsJSON", JSON.stringify(data))
    })
fetch('../text/records.json')
    .then(resultRecords => resultRecords.json())
    .then(function(data) {
        localStorage.setItem("recordsJSON", JSON.stringify(data))
    })
localStorage.setItem("currentMember", "")

console.log(JSON.parse(localStorage.getItem("drinksJSON"))
console.log(JSON.parse(localStorage.getItem("promoJSON"))            
console.log(JSON.parse(localStorage.getItem("memberJSON"))
console.log(JSON.parse(localStorage.getItem("foodJSON"))            
console.log(JSON.parse(localStorage.getItem("ingredientsJSON"))
console.log(JSON.parse(localStorage.getItem("recordsJSON"))         

let DrinksID = [], Drinks = [], DrinksCategory = [], PromoCode = [], Discount = [],
MemberID = [], MemberPassword = [], BirthMonth = [], MemberPoints = [], Coupon = [],
FoodID = [], FoodName = [], FoodCategory = [], IngredientsID = [], Ingredients = [],
Quantity = []

data = JSON.parse(localStorage.getItem("ingredientsJSON"))
for (let rows = 0; rows < data.length; rows++) {
    PromoCode[rows] = data[rows].PromoCode
    Discount[rows] = data[rows].Discount
}
    
allOrder = ""
currentMember = localStorage.getItem("currentMember")

function transferData(a) {
    allOrder += a
}

function saveData() {
    if (allOrder != "") {
        localStorage.setItem("orders", allOrder.substring(0, allOrder.length - 1))
    } else {
        localStorage.setItem("orders", "")
    }
}

function printText() {
    console.log(localStorage.getItem("orders"))
}

//0 = set_breakfast, 1 = set_all, 2 = set_tea, 3 = food_a_la_carte, 4 = food_side, 5 = food_dessert, 6 = beverages_iced, 7 = beverages_hot, 8 = set
allItems = [['Tuna Croissant Breakfast Set', 'Ham & Cheese Croissant Breakfast Set', 'Fish Burger Breakgast Set', 
'Ham & Egg Burger Breakfast Set', 'MOS Fish Fillet Breakfast Set', 'MOS Morning Breakfast Set', 'MOS Teriyaki Chicken Breakfast Set', 
'Teriyaki Chicken Burger Breakfast Set', 'Plain Dog Breakfast Set', 'Chicken Burger Breakfast Set', 'Kimpira Rice Burger Breakfast Set'],
['MOS Burger Set', 'MOS Cheese Burger Set', 'Australian Wagyu Original Set', 'Teriyaki Burger Set', 'Saku Chicken Burger Set',
'Ebi Katsu Burger Set', 'Teriyaki Chicken Burger Set', 'Chicken Burger Set', 'Hokkaido Pumpkin Croquette Burger Set', 'Fish Burger Set',
'Fresh Burger Set', 'Cheese Burger Set', 'Seafood Rice Burger Set', 'Yakiniku Rice Burger Set', 'Kimpira Rice Burger Set',
'Plain Dog Set', 'Chili Dog Set', 'Cheese Teriyaki Chicken Rice Burger Set', 'Spicy MOS Burger Set', 'Spicy MOS Cheese Burger Set'], 
['Plain Dog Tea Set', 'Fish Burger Tea Set', 'Kimpira Rice Burger Tea Set', 'Happy Combo Tea Set', 'Seafood Rice Burger Tea Set',
'Ebi Katsu Burger Tea Set', 'Cheese Burger Tea Set'], ['MOS Burger', 'MOS Cheese Burger', 'Australian Wagyu Original', 'Teriyaki Burger', 
'Saku Chicken Burger', 'Ebi Katsu Burger', 'Teriyaki Chicken Burger', 'Chicken Burger', 'Hokkaido Pumpkin Croquette Burger', 
'Fish Burger', 'Fresh Burger', 'Cheese Burger', 'Seafood Rice Burger', 'Yakiniku Rice Burger', 'Kimpira Rice Burger', 'Plain Dog', 
'Chili Dog', 'Cheese Teriyaki Chicken Rice Burger', 'Spicy MOS Burger', 'Spicy MOS Cheese Burger'], ['Fries (S)', 'Fries (L)', 'Chicken Nuggets',
'MOS Chicken', 'Green Salad'], ['Hokkaido Pumpkin Croquette (1 pc)', 'Hokkaido Pumpkin Croquette (3 pcs)', 'Hokkaido Pumpkin Croquette (5 pcs)',
'Sea Salt Flavoured Ice Cream', 'Green Tea Flavoured Ice Cream'], ['Coca Cola Original (M)', 'Coca Cola Zero (M)', 'Sprite (M)',
'Ginger Ale (M)', 'Iced Coffee', 'Iced Lemon Tea', 'Iced Milk Tea', 'Coca Cola Original (L)', 'Coca Cola Zero (L)', 'Sprite (L)',
'Ginger Ale (L)', 'Cold Carrot Juice', 'Cold Grape Juice', 'Cold Tomato Juice', 'Iced Coffee Latte', 'Iced Matcha Latte'], ['Hot Coffee',
'Hot Lemon Tea', 'Hot Lemon Water', 'Hot Milk Tea', 'Hot Coffee Latte', 'Hot Matcha Latte', 'Hot Corn Soup'], ['Fries (S)', 'Fries (L)',
'Pumpkin Croquette', 'MOS Nuggets', 'MOS Chicken', 'Green Salad', 'Ice Cream']]
allItemsImg = [['tuna_croissant_set.png', 'ham_n_cheese_croissant_set.png', 'fish_burger_set.png', 'ham_n_egg_burger_set.png',
'mos_fish_fillet_set.png', 'mos_morning_set.png', 'mos_teriyaki_chicken_set.png', 'teriyaki_chicken_burger_set.png', 'plain_dog_set.png',
'chicken_burger_set.png', 'kimpira_rice_burger_set.png'], ['mos_burger.png', 'mos_cheese_burger.png', 'australian_wagyu_original.png',
'teriyaki_burger.png', 'saku_chicken_burger.png', 'ebi_katsu_burger.png', 'teriyaki_chicken_burger.png', 'chicken_burger.png',
'hokkaido_pumpkin_croquette_burger.png', 'fish_burger.png', 'fresh_burger.png', 'cheese_burger.png', 'seafood_rice_burger.png',
'yakiniku_rice_burger.png', 'kimpira_rice_burger.png', 'plain_dog.png', 'chili_dog.png', 'cheese_teriyaki_chicken_rice_burger.png',
'spicy_mos_burger.png', 'spicy_mos_cheese_burger.png'], ['plain_dog_set.png', 'fish_burger_set.png', 'kimpira_rice_burger_set.png',
'happy_combo_set.png', 'seafood_rice_burger_set.png', 'ebi_katsu_burger_set.png', 'cheese_burger_set.png'], ['mos_burger.png', 'mos_cheese_burger.png',
'australian_wagyu_original.png', 'teriyaki_burger.png', 'saku_chicken_burger.png', 'ebi_katsu_burger.png', 'teriyaki_chicken_burger.png',
'chicken_burger.png', 'hokkaido_pumpkin_croquette_burger.png', 'fish_burger.png', 'fresh_burger.png', 'cheese_burger.png', 'seafood_rice_burger.png',
'yakiniku_rice_burger.png', 'kimpira_rice_burger.png', 'plain_dog.png', 'chili_dog.png', 'cheese_teriyaki_chicken_rice_burger.png',
'spicy_mos_burger.png', 'spicy_mos_cheese_burger.png'], ['fries_s.png', 'fries_l.png', 'chicken_nuggets.png', 'mos_chicken.png', 'salad.png'],
['hokkaido_pumpkin_croquette.png', 'hokkaido_pumpkin_croquette.png', 'hokkaido_pumpkin_croquette.png', 'ice_cream_salt.png', 'ice_cream_green_tea.png'],
['cola_original.png', 'cola_zero.png', 'sprite.png', 'ginger_ale.png', 'iced_coffee.png', 'iced_lemon_tea.png', 'iced_milk_tea.png', 'cola_original.png',
 'cola_zero.png', 'sprite.png', 'ginger_ale.png', 'kagome_carrot.png', 'kagome_grape.png', 'kagome_tomato.png', 'iced_coffee_latte.png',
 'iced_matcha_latte.png'], ['hot_coffee.png', 'hot_lemon_tea.png', 'hot_lemon_water.png', 'hot_milk_tea.png', 'hot_coffee_latte.png',
 'hot_matcha_latte.png', 'corn_soup.png']]

function onloadCart() {
    subtotal = 0
    allOrder = localStorage.getItem("orders")
    if (allOrder != "") {
        allOrder.split("|").forEach(item => {
            var newTr = document.querySelector('.cart_table').insertRow()
            var newTd = document.createElement("td")
            var newCartDiv = document.createElement("div")
            var newImg = document.createElement("img")
            var newDivInDiv = document.createElement("div")
            var newTitle = document.createElement("p")
            var newTd2 = document.createElement("td")
            var newTd3 = document.createElement("td")
            var newTd4 = document.createElement("td")
            var newTd2Div = document.createElement("div")
            var newTd2DivA = document.createElement("a")
            var newTd2DivAI = document.createElement("i")
            var newTd3P = document.createElement("p")
            var newTd3Up = document.createElement("i")
            var newTd3Down = document.createElement("i")
            newTd2.className = "removeTd"
            newTd2Div.className = "removeDiv"
            newTd2DivAI.className = "fas fa-times"
            newTd2DivAI.onclick = function() {removeRow(this)} 
            newTd3.className = "input"
            newTd3Up.className = "fas fa-angle-up"
            newTd3Up.onclick = function() {increment(this)}
            newTd3Down.className = "fas fa-angle-down"
            newTd3Down.onclick = function() {decrement(this)}
            newTd3P.textContent = "1"
            newTd4.className = "price"
            newTd2.appendChild(newTd2Div)
            newTd2Div.appendChild(newTd2DivA)
            newTd2DivA.appendChild(newTd2DivAI)
            newTd3.appendChild(newTd3Up)
            newTd3.appendChild(newTd3P)
            newTd3.appendChild(newTd3Down)
            newCartDiv.className = "cart_info"
            newTr.appendChild(newTd)
            newTr.appendChild(newTd2)
            newTr.appendChild(newTd3)
            newTr.appendChild(newTd4)
            newTd.appendChild(newCartDiv)
            newCartDiv.appendChild(newImg)
            newCartDiv.appendChild(newDivInDiv)
            newDivInDiv.appendChild(newTitle)
            imgPath = "images/"
            nameDouble = ""
            itemDouble = false
            console.log(item)
            parts = item.split(" ")
            splitting = parts[0].substring(1).split("_")
            if (splitting[0] == "double") {
                splitting.shift()
                itemDouble = true
                nameDouble = splitting.join("_")
            }
            index = splitting.pop()
            switch (splitting.join("_")) {
                case "set_breakfast":
                    newTitle.textContent = allItems[0][parseInt(index) - 1]
                    imgPath += allItemsImg[0][parseInt(index) - 1]
                    break
                case "set_all":
                    newTitle.textContent = allItems[1][parseInt(index) - 1]
                    imgPath += allItemsImg[1][parseInt(index) - 1]
                    break
                case "set_tea":
                    newTitle.textContent = allItems[2][parseInt(index) - 1]
                    imgPath += allItemsImg[2][parseInt(index) - 1]
                    break
                case "food_a_la_carte":
                    newTitle.textContent = allItems[3][parseInt(index) - 1]
                    imgPath += allItemsImg[3][parseInt(index) - 1]
                    break
                case "food_side":
                    newTitle.textContent = allItems[4][parseInt(index) - 1]
                    imgPath += allItemsImg[4][parseInt(index) - 1]
                    break
                case "food_dessert":
                    newTitle.textContent = allItems[5][parseInt(index) - 1]
                    imgPath += allItemsImg[5][parseInt(index) - 1]
                    break
                case "beverages_iced":
                    newTitle.textContent = allItems[6][parseInt(index) - 1]
                    imgPath += allItemsImg[6][parseInt(index) - 1]
                    break
                case "beverages_hot":
                    newTitle.textContent = allItems[7][parseInt(index) - 1]
                    imgPath += allItemsImg[7][parseInt(index) - 1]
                    break
            }
            if (itemDouble == true) {
                console.log(nameDouble)
                if (nameDouble == "set_all_19" || nameDouble == "food_a_la_carte_19") {
                    imgPath = "images/spicy_double_mos_burger.png"
                } else if (nameDouble == "set_all_20" || nameDouble == "food_a_la_carte_20") {
                    imgPath = "images/spicy_double_mos_cheese_burger.png"
                } else {
                    temp = imgPath.split("/")
                    temp[1] = "double_" + temp[1]
                    imgPath = temp.join("/")
                }
                newTitle.textContent = newTitle.textContent + " (Double)"
            }
            newImg.src = imgPath
            parts.shift()
            beverages = false
            noSmall = false
            parts.forEach(seperation => {
                smallContent = ""
                elements = seperation.substring(1).split("_")
                var newSmall = document.createElement("small")
                switch (seperation[0]) {
                    case 'c':
                        specification = elements.pop()
                        elements.forEach(upper => {
                            smallContent += upper[0].toUpperCase() + upper.substring(1) + " "
                        })
                        smallContent = smallContent.substring(0, smallContent.length - 1)
                        smallContent += ": " + specification[0].toUpperCase() + specification.substring(1)
                        break
                    case 's':
                        set = elements.pop()
                        smallContent += "Set " + set.toUpperCase() + " " + allItems[8][set.charCodeAt(0) - 97]
                        break
                    case 'b':
                        if (beverages == false) {
                            smallContent = "Beverages: "
                            elements.forEach(upper => {
                                smallContent += upper[0].toUpperCase() + upper.substring(1) + " "
                            })
                            smallContent = smallContent.substring(0, smallContent.length - 1)
                            beverages = true
                        } else {
                            specification = elements.pop()
                            elements.forEach(upper => {
                                smallContent += upper[0].toUpperCase() + upper.substring(1) + " "
                            })
                            smallContent = smallContent.substring(0, smallContent.length - 1)
                            smallContent += ": " + specification[0].toUpperCase() + specification.substring(1)
                        }
                        break
                    case 'p':
                        subtotal += parseInt(elements[0])
                        newTd4.textContent = "$" + parseInt(elements[0]).toFixed(2)
                        noSmall = true
                }
                newSmall.textContent = smallContent
                console.log(smallContent)
                if (noSmall == false) {
                    newDivInDiv.appendChild(newSmall)
                }
            })
        })
    } else {
        var newTr = document.querySelector('.cart_table').insertRow()
        var newTd = document.createElement("td")
        var newTd2 = document.createElement("td")
        var newTd3 = document.createElement("td")
        var newTd4 = document.createElement("td")
        newTd2.textContent = "😔"
        newTd3.textContent = "Empty"
        newTr.appendChild(newTd)
        newTr.appendChild(newTd2)
        newTr.appendChild(newTd3)
        newTr.appendChild(newTd4)
    }
    document.querySelector('.subtotal').textContent = "$" + subtotal.toFixed(2)
    document.querySelector('.total').textContent = "$" + (subtotal - parseFloat(document.querySelector('.discount').textContent.substring(1))).toFixed(2)
    if (currentMember != "") {
        document.querySelector('.cart_member_id').textContent = currentMember
    }
}

function updatePrice() {
    subtotalPrice = 0
    cart_table = document.querySelector('.cart_table')
    for (var rowNumber = 1; rowNumber < cart_table.rows.length; rowNumber++) {
        subtotalPrice += parseFloat(cart_table.rows[rowNumber].cells[3].textContent.substring(1))
    }
    document.querySelector('.subtotal').textContent = "$" + subtotalPrice.toFixed(2)
    document.querySelector('.total').textContent = "$" + (subtotalPrice - parseFloat(document.querySelector('.discount').textContent.substring(1))).toFixed(2)
}

function updateItemPrice(a, originalQuantity) {
    price = a.parentElement.parentElement.children[3].textContent
    mulitplier = parseInt(a.parentElement.children[1].textContent)
    price = parseFloat(price.substring(1))
    a.parentElement.parentElement.children[3].textContent = "$" + (price / originalQuantity * mulitplier).toFixed(2)
}

function decrement(a) {
    if (parseInt(a.parentElement.children[1].textContent) >= 2) {
        originalQuantity = parseInt(a.parentElement.children[1].textContent)
        a.parentElement.children[1].textContent = parseInt(a.parentElement.children[1].textContent) - 1
        updateItemPrice(a, originalQuantity)
        updatePrice()
    }
}
function increment(a) {
    if (parseInt(a.parentElement.children[1].textContent) <= 9) {
        originalQuantity = parseInt(a.parentElement.children[1].textContent)
        a.parentElement.children[1].textContent = parseInt(a.parentElement.children[1].textContent) + 1
        updateItemPrice(a, originalQuantity)
        updatePrice()
    }
}

function checkPromoCode() {
    userPromoCode = document.querySelector('.promo_code_input').value;
    console.log(userPromoCode)
    promoCodeValid = false
    if (PromoCode.includes(userPromoCode) == true) {
        document.querySelector('.discount').textContent = "$" + (Discount[PromoCode.indexOf(userPromoCode)]).toFixed(2)
    } else {
        document.querySelector('.discount').textContent = "$0.00"
    }
    updatePrice()
}

function removeRow(a) {
    allOrder = localStorage.getItem("orders")
    splitting = allOrder.split("|")
    target = 0
    count = 0
    document.querySelectorAll('.fas.fa-times').forEach(times => {
        if (times == a) {
            target = count
        }
        count++
    })
    console.log(target)
    splitting.splice(target, 1)
    splitting = splitting.join("|")
    console.log(splitting)
    localStorage.setItem("orders", splitting)
    clearTable = document.querySelector('.cart_table').rows.length
    for (let i = 1; i < clearTable; i++) {
        document.querySelector('.cart_table').deleteRow(1)
    }
    onloadCart()
}
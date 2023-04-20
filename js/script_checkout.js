let getIngredientsJSON = JSON.parse(localStorage.getItem("ingredientsJSON"))
let getRecordsJSON = JSON.parse(localStorage.getItem("recordsJSON"))
let getMemberJSON = JSON.parse(localStorage.getItem("memberJSON"))

currentMember = localStorage.getItem("currentMember")

targetMemberRow = 0
countMemberRow = 0
for (const member in getMemberJSON) {
    if (getMemberJSON[member].MemberID == currentMember) {
        targetMemberRow = countMemberRow
    }
    countMemberRow++
}
//hardcode
//0 = breakfast, 1 = all & a la carte, 2 = tea, 3 = side, 4 = dessert, 5 = iced beverages, 6 = hot beverages, 7 = set
allItemIngredients = [[[2, 16, 18, 43, 52], [2, 13, 18, 19, 43], [1, 15, 19, 52],
[1, 13, 20, 43], [3, 14, 15, 46, 47, 52], [3, 14, 20, 46, 47], [3, 8, 20, 46, 47, 53],
[1, 8, 43, 52, 53], [4, 14, 48, 54, 55], [1, 9, 44, 56], [5, 21, 45]], 

[[1, 6, 18, 52, 57], [1, 6, 18, 19, 52, 57], [1, 6, 18, 19, 43, 49, 58], [1, 6, 43, 52, 53], 
[1, 10, 44, 56], [1, 17, 44, 56], [1, 8, 43, 53], [1, 9, 44, 56], [1, 22, 44, 59], 
[1, 15, 19, 52], [1, 6, 18, 44, 60], [1, 6, 19, 48, 54], [5, 23], [5, 7, 43], 
[5, 21, 45], [4, 14, 48, 54, 55], [4, 14, 48, 61], [5, 8, 19, 43, 49, 50], 
[1, 6, 18, 48, 51, 52, 57], [1, 6, 18, 19, 48, 51, 52]], 

[[4, 14, 48, 54, 55], [1, 15, 19, 52], [5, 21, 45], [11, 22, 24], [5, 23], 
[1, 17, 44, 56], [1, 6, 19, 48, 54]], 

[[24], [24], [11], [12], [25]],

[[22], [22, 22, 22], [22, 22, 22, 22, 22], [26], [27]],

[[28, 33], [29, 33], [30, 33], [31, 33], [34], [35, 37], [35, 38], [28, 33], [29, 33],
[30, 33], [31, 33], [39], [40], [41], [34, 38], [36, 38]],

[[34], [35, 37], [37], [35, 38], [34, 38], [36, 38], [42]],

[[24], [24], [22], [11], [12], [25], [26], [27]],

['cola_original_M', 'cola_zero_M', 'sprite_M', 'ginger_ale_M', 'iced_coffee', 'iced_lemon_tea', 'iced_milk_tea', 'cola_original_L', 'cola_zero_L',
'sprite_L', 'ginger_ale_L', 'kagome_carrot', 'kagome_grape', 'kagome_tomato', 'iced_coffee_latte', 'iced_matcha_latte'],

['hot_coffee', 'hot_lemon_tea', 'hot_lemon_water', 'hot_milk_tea', 'hot_coffee_latte', 'hot_matcha_latte', 'soup']]

//0 = set_breakfast, 1 = set_all, 2 = set_tea, 3 = food_a_la_carte, 4 = food_side, 5 = food_dessert, 6 = beverages_iced, 7 = beverages_hot
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


function checkOut() {
    getTotalPrice = 0
    amountOrder = 0
    getAllItems = localStorage.getItem("orders")
    if (getAllItems != "") {
        splittedAllItems = getAllItems.split("|")
        countAllItems = splittedAllItems.length
        getImgSplitSpecification = splittedAllItems[0].split(" ")
        getImgSplitItem = getImgSplitSpecification[0].substring(1)
        getImgCategory = getImgSplitItem.split("_")
        getImgCount = parseInt(getImgCategory.pop())
        getImgCategory = getImgCategory.join("_")
        imgCategory = 0
        switch (getImgCategory) {
            case "set_breakfast":
                imgCategory = 0
                break
            case "set_all":
                imgCategory = 1
                break
            case "set_tea":
                imgCategory = 2
                break
            case "food_a_la_carte":
                imgCategory = 3
                break
            case "food_side":
                imgCategory = 4
                break
            case "food_dessert":
                imgCategory = 5
                break
            case "beverages_iced":
                imgCategory = 6
                break
            case "beverages_hot":
                imgCategory = 7
                break
        }
        getImg = "images/" + allItemsImg[imgCategory][getImgCount - 1]
        //looping through each row
        for (let rowNumber = 0; rowNumber < countAllItems; rowNumber++) {
            getRowItem = splittedAllItems[rowNumber]
            splittedRowItems = getRowItem.split(" ")
            getRowItemCount = document.querySelector('.cart_table').rows[rowNumber + 1].cells[2].children[1].textContent
            getRowPrice = document.querySelector('.cart_table').rows[rowNumber + 1].cells[3].textContent
            //looping for the amount of each row
            for (let rowCount = 0; rowCount < getRowItemCount; rowCount++) {
                //looping through each specification of the item
                for (const itemNumber in splittedRowItems) {
                    getEachSpecification = splittedRowItems[itemNumber]
                    getCategoryEachSpecification = getEachSpecification[0]
                    getContentEachSpecification = getEachSpecification.substring(1)
                    //getContentEachSpecification is the content
                    switch (getCategoryEachSpecification) {
                        case "i":
                            splitItemSpecification = getContentEachSpecification.split("_")
                            doubleValidation = false
                            if (splitItemSpecification[0] == "double") {
                                splitItemSpecification.shift()
                                doubleValidation = true
                            }
                            categoryItemSpecification = splitItemSpecification[0]
                            if (splitItemSpecification.length == 3) {
                                aspectItemSpecification = splitItemSpecification[1]
                                idItemSpecification = parseInt(splitItemSpecification[2])
                            } else {
                                aspectItemSpecification = "a_la_carte"
                                idItemSpecification = parseInt(splitItemSpecification[4])
                            }
                            //switch for set/food/beverages
                            switch (categoryItemSpecification) {
                                case "set":
                                    //switch for breakfast/all/tea
                                    switch (aspectItemSpecification) {
                                        case "breakfast":
                                            ingredientDecrementI = allItemIngredients[0][idItemSpecification - 1]
                                            break
                                        case "all":
                                            ingredientDecrementI = allItemIngredients[1][idItemSpecification - 1]
                                            break
                                        case "tea":
                                            ingredientDecrementI = allItemIngredients[2][idItemSpecification - 1]
                                            break
                                    }
                                    break
                                case "food":
                                    //switch for a_la_carte/side/dessert
                                    switch (aspectItemSpecification) {
                                        case "a_la_carte":
                                            ingredientDecrementI = allItemIngredients[1][idItemSpecification - 1]
                                            break
                                        case "side":
                                            ingredientDecrementI = allItemIngredients[3][idItemSpecification - 1]
                                            break
                                        case "dessert":
                                            ingredientDecrementI = allItemIngredients[4][idItemSpecification - 1]
                                            break
                                    }
                                    break
                                case "beverages":
                                    //switch for iced/hot
                                    switch (aspectItemSpecification) {
                                        case "iced":
                                            ingredientDecrementI = allItemIngredients[5][idItemSpecification - 1]
                                            break
                                        case "hot":
                                            ingredientDecrementI = allItemIngredients[6][idItemSpecification - 1]
                                            break
                                    }
                                    break
                            }
                            for (const id in ingredientDecrementI) {
                                if (doubleValidation == true) {
                                    if (ingredientDecrementI[id] == 6) {
                                        getIngredientsJSON[5].Quantity--
                                    }
                                }
                                getIngredientsJSON[ingredientDecrementI[id] - 1].Quantity = getIngredientsJSON[ingredientDecrementI[id] - 1].Quantity - 1
                            }
                            break
                        case "c":
                            splitCustomizationSpecification = getContentEachSpecification.split("_")
                            customizedCustomizationSpecification = splitCustomizationSpecification.pop()
                            contentCustomizationSpecification = splitCustomizationSpecification.join("_")
                            ingredientIncrement = 0
                            //switch for every customization ingredients
                            switch (contentCustomizationSpecification) {
                                case "tomato":
                                    ingredientIncrement = 17
                                    break
                                case "cheese":
                                    ingredientIncrement = 18
                                    break
                                case "sweetness":
                                    ingredientIncrement = 31
                                    break
                                case "lettuce":
                                    ingredientIncrement = 42
                                    break
                                case "sliced_lettuce":
                                    ingredientIncrement = 43
                                    break
                                case "seaweed":
                                    ingredientIncrement = 44
                                    break
                                case "onion":
                                    if (splitItemSpecification[0] == "iset_all_3" || splitItemSpecification[0] == "iset_all_18" || splitItemSpecification[0] == "ifood_a_la_carte_3" || splitItemSpecification[0] == "ifood_a_la_carte_18") {
                                        ingredientIncrement = 48
                                    } else {
                                        ingredientIncrement = 47
                                    }
                                    break
                                case "wasabi":
                                    ingredientIncrement = 49
                                    break
                                case "sliced_chili":
                                    ingredientIncrement = 50
                                    break
                                case "mayonnaise":
                                    ingredientIncrement = 51
                                    break
                                case "teriyaki_sauce":
                                    ingredientIncrement = 52
                                    break
                                case "ketchup":
                                    ingredientIncrement = 53
                                    break
                                case "mustard":
                                    ingredientIncrement = 54
                                    break
                            case "tempura_sauce":
                                    ingredientIncrement = 55
                                    break
                                case "mos_sauce":
                                    ingredientIncrement = 56
                                    break
                                case "wagyu_sauce":
                                    ingredientIncrement = 57
                                    break
                                case "vinegar_sauce":
                                    ingredientIncrement = 58
                                    break
                                case "thousand_island_sauce":
                                    ingredientIncrement = 59
                                    break
                                case "chili_meat_sauce":
                                    ingredientIncrement = 60
                                    break
                            }
                            if (contentCustomizationSpecification[contentCustomizationSpecification.length - 1] == 'o') {
                                getIngredientsJSON[ingredientIncrement].Quantity++
                            }
                            break
                        case "s":
                            ingredientDecrementS = allItemIngredients[7][getContentEachSpecification.charCodeAt(4) - 97]
                            getIngredientsJSON[ingredientDecrementS - 1].Quantity--
                            break
                        case "b":
                            splitContentSpecification = getContentEachSpecification.split("_")
                            if (splitContentSpecification[0] != "ice" && splitContentSpecification[0] != "sweetness") {
                                countTargetID = 0
                                targetID = 0
                                allItemID = 0
                                if (splitContentSpecification[0] != 'h' && (splitContentSpecification[0] != 's' && splitContentSpecification[1] != 'o')) {
                                    allItemID = 5
                                    for (const a in allItemIngredients[8]) {
                                        if (a == splitContentSpecification.join("_")) {
                                            targetID = countTargetID
                                        }
                                        countTargetID++
                                    }
                                } else {
                                    allItemID = 6
                                    for (const a in allItemIngredients[9]) {
                                        if (a == splitContentSpecification.join('_')) {
                                            targetID = countTargetID
                                        }
                                        countTargetID++
                                    }
                                }
                                ingredientDecrementB = allItemIngredients[allItemID][targetID]
                                for (const items in ingredientDecrementB) {
                                    getIngredientsJSON[ingredientDecrementB[items] - 1].Quantity--
                                }
                            } else if (splitContentSpecification[0] == "sweetness") {
                                if (splitContentSpecification[1] != "no") {
                                    getIngredientsJSON[31].Quantity--
                                }
                            }
                            break
                    }
                }
                getTotalPrice += parseFloat(getRowPrice.substring(1))
                localStorage.setItem("ingredientsJSON", JSON.stringify(getIngredientsJSON))
                amountOrder++
            }
        }
        var today = new Date();
        getRecordDate = ("0" + today.getDate()).slice(-2) + "/" + ("0" + today.getMonth()).slice(-2) + "/" + ("0" + today.getFullYear()).slice(-2)
        getRecordTime = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2)
        addRecord = {"MemberID": currentMember , "Record": amountOrder, "Img": getImg, "Price": getTotalPrice, "Date": getRecordDate, "Time": getRecordTime}
        var newRecord = getRecordsJSON.concat(addRecord)
        localStorage.setItem("recordsJSON", JSON.stringify(newRecord))
        console.log(getMemberJSON[targetMemberRow + 1].MemberPoints + getTotalPrice)
        getMemberJSON[targetMemberRow + 1].MemberPoints = getMemberJSON[targetMemberRow + 1].MemberPoints + getTotalPrice
        localStorage.setItem("memberJSON", JSON.stringify(getMemberJSON))
    }
}

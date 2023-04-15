var cancel_btn_check = document.getElementById("cancel_btn")

function closeNav() {
    cancel_btn_check.checked = true;
}

var previewContainer = document.querySelector('.product_preview_set')
var previewBox = previewContainer.querySelectorAll('.preview')

document.querySelectorAll('.products_container .product').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        })
    }
})

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        toggleOffAllRadioButtons();
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
})

function doubleLayer(a, b, c) {
    document.querySelectorAll('.preview.active .doubleDiv label').forEach(btns => {
        btns.style.background = "#fff"
    })
    document.querySelector('.preview.active img').src = a
    document.querySelector('.preview.active .header').textContent = b
    updatePrice = parseInt(document.querySelector('.preview.active .price').textContent.substring(1))
    document.querySelector('.preview.active div.header').classList.forEach(classes => {
        if (classes == 'double') {
            updatePrice -= 8
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice).toString()
            document.querySelector('.preview.active .header').classList.remove('double')
            document.querySelector('.preview.active div [for='+ CSS.escape(c) +']').style.background = "#ddd"
        }
    })
    if (b[0] == 'D' || b[6] == 'D') {
        updatePrice += 8
        document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice).toString()
        document.querySelector('.preview.active .header').classList.add('double')
        document.querySelector('.preview.active div [for='+ CSS.escape(c) +']').style.background = "#ddd"
    }
}

function customizationClickRadio(a, b, c) {
    a.checked = true;
    selects = "div#" + c + " button"
    document.querySelectorAll(selects).forEach(buttons => {
        buttons.style.background = "#efefef"
        buttons.style.border = "1px solid #767676"
        buttons.style.borderRadius = "3px"
    })
    b.style.background = "#ccc"
}

function iceCustomizationClickRadio(a, b) {
    a.checked = true;
    selects = ".ice_customisation button"
    document.querySelectorAll(selects).forEach(buttons => {
        buttons.style.background = "#efefef"
    })
    b.style.background = "#ccc"
}
function sweetnessCustomizationClickRadio(a, b) {
    a.checked = true;
    selects = ".sweetness_customisation button"
    document.querySelectorAll(selects).forEach(buttons => {
        buttons.style.background = "#efefef"
    })
    b.style.background = "#ccc"
}

function setClickRadio(a, b) {
    updatePrice = parseInt(document.querySelector('.preview.active .price').textContent.substring(1))
    document.querySelectorAll('.sets').forEach(div => {
        div.style.background = "#fff";
    })
    a.checked = true;
    selects = "#" + b
    document.querySelectorAll(selects).forEach(div => {
        div.style.background = "#eee";
    })
    document.querySelector('.preview.active .price').classList.forEach(function (value) {
        switch (value) {
            case 'twenty-one':
                updatePrice -= 21
                document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice).toString()
                document.querySelector('.preview.active .price').classList.remove('twenty-one')
                break
            case 'twenty-two':
                updatePrice -= 22
                document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice).toString()
                document.querySelector('.preview.active .price').classList.remove('twenty-two')
                break
            case 'twenty-three':
                updatePrice -= 23
                document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice).toString()
                document.querySelector('.preview.active .price').classList.remove('twenty-three')
                break
            case 'twenty-five':
                updatePrice -= 25
                document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice).toString()
                document.querySelector('.preview.active .price').classList.remove('twenty-five')
                break
            case 'twenty-six':
                updatePrice -= 26
                document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice).toString()
                document.querySelector('.preview.active .price').classList.remove('twenty-six')
                break
        }
    })
    switch (b) {
        case 'set_A_div':
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice + 21).toString()
            document.querySelector('.preview.active .price').classList.add('twenty-one')
            break
        case 'set_B_div':
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice + 23).toString()
            document.querySelector('.preview.active .price').classList.add('twenty-three')
            break
        case 'set_C_div':
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice + 22).toString()
            document.querySelector('.preview.active .price').classList.add('twenty-two')
            break
        case 'set_D_div':
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice + 25).toString()
            document.querySelector('.preview.active .price').classList.add('twenty-five')
            break
        case 'set_E_div':
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice + 26).toString()
            document.querySelector('.preview.active .price').classList.add('twenty-six')
            break
        case 'set_F_div':
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice + 25).toString()
            document.querySelector('.preview.active .price').classList.add('twenty-five')
            break
        case 'set_G_div':
            document.querySelector('.preview.active .price').innerHTML = '$' + (updatePrice + 25).toString()
            document.querySelector('.preview.active .price').classList.add('twenty-five')
            break
    }
}

function beveragesClickRadio(a, b) {
    target = document.querySelector('.preview.active .price')
    updatePrice = parseInt(target.textContent.substring(1))
    document.querySelectorAll('.beverages').forEach(div => {
        div.style.background = "#fff";
    })
    a.checked = true;
    selects = "#" + b
    document.querySelectorAll(selects).forEach(div => {
        div.style.background = "#eee";
    })
    target.classList.forEach(function (value) {
        switch (value) {
            case 'two':
                updatePrice -= 2
                target.innerHTML = '$' + (updatePrice).toString()
                target.classList.remove('two')
                break
            case 'three':
                updatePrice -= 3
                target.innerHTML = '$' + (updatePrice).toString()
                target.classList.remove('three')
                break
            case 'six':
                updatePrice -= 6
                target.innerHTML = '$' + (updatePrice).toString()
                target.classList.remove('six')
                break
        }
    })
    switch (b) {
        case 'cola_L_div': case 'zero_L_div': case 'sprite_L_div': case 'ginger_L_div':
            target.innerHTML = '$' + (updatePrice + 2).toString()
            target.classList.add('two')
            break
        case 'iced_milk_div': case 'iced_lemon_div': case 'iced_coffee_div': case 'soup_div': case 'kagome_carrot_div': case 'kagome_grape_div': case 'kagome_tomato_div':
            target.innerHTML = '$' + (updatePrice + 3).toString()
            target.classList.add('three')
            break
        case 'iced_matcha_div': case 'iced_coffee_latte_div': case 'hot_matcha_latte_div': case 'hot_coffee_latte_div':
            target.innerHTML = '$' + (updatePrice + 6).toString()
            target.classList.add('six')
            break
    }
    document.querySelectorAll('.preview.active div div div').forEach(main => {
        if (main.classList.length != 1) {
            c = main.id
            document.querySelectorAll('#' + c).forEach(div => {
                if (div.classList.value.search("ice") != -1) {
                    div.classList.remove('ice')
                    document.querySelectorAll('.ice_customisation').forEach(smol => {
                        smol.remove()
                    })
                }
                if (div.classList.value.search("sweetness") != -1) {
                    div.classList.remove('sweetness')
                    document.querySelectorAll('.sweetness_customisation').forEach(smol => {
                        smol.remove()
                    })
                }
            })
            document.querySelectorAll("[name='ice'], [name='sweetness']").forEach(cell => {
                cell.checked = false
            })
        }
    })
    var ice_div = document.createElement('div')
    var sweetness_div = document.createElement('div')

    var ice_paragraph = document.createElement('p')
    var sweetness_paragraph = document.createElement('p')

    var button_ice_no = document.createElement('button')
    var button_ice_less = document.createElement('button')
    var button_ice_normal = document.createElement('button')
    var button_ice_more = document.createElement('button')
    var button_sweetness_normal = document.createElement('button')
    var button_sweetness_half = document.createElement('button')
    var button_sweetness_no = document.createElement('button')

    ice_div.className = "ice_customisation"
    sweetness_div.className = "sweetness_customisation"

    ice_paragraph.textContent = "Ice"
    sweetness_paragraph.textContent = "Sweetness"

    button_ice_no.onclick = function() {iceCustomizationClickRadio(ice_no, this)}
    button_ice_no.textContent = "No"
    button_ice_less.onclick = function() {iceCustomizationClickRadio(ice_less, this)}
    button_ice_less.textContent = "Less"
    button_ice_normal.onclick = function() {iceCustomizationClickRadio(ice_normal, this)}
    button_ice_normal.textContent = "Normal"
    button_ice_more.onclick = function() {iceCustomizationClickRadio(ice_more, this)}
    button_ice_more.textContent = "More"
    button_sweetness_no.onclick = function() {sweetnessCustomizationClickRadio(sweetness_no, this)}
    button_sweetness_no.textContent = "No"
    button_sweetness_half.onclick = function() {sweetnessCustomizationClickRadio(sweetness_half, this)}
    button_sweetness_half.textContent = "Less"
    button_sweetness_normal.onclick = function() {sweetnessCustomizationClickRadio(sweetness_normal, this)}
    button_sweetness_normal.textContent = "Normal"

    ice_div.appendChild(ice_paragraph)
    ice_div.appendChild(button_ice_no)
    ice_div.appendChild(button_ice_less)
    ice_div.appendChild(button_ice_normal)
    ice_div.appendChild(button_ice_more)
    sweetness_div.appendChild(sweetness_paragraph)
    sweetness_div.appendChild(button_sweetness_no)
    sweetness_div.appendChild(button_sweetness_half)
    sweetness_div.appendChild(button_sweetness_normal)

    if (document.querySelector('.preview.active div div #' + CSS.escape(b)).id[0] != "h") {
        document.querySelector('.preview.active div div #' + CSS.escape(b)).after(ice_div)
    }
    listOfSweetness = "iced_coffee_div iced_lemon_div iced_milk_div iced_coffee_latte_div iced_matcha_div"
    if (listOfSweetness.search(document.querySelector('.preview.active div div #' + CSS.escape(b)).id) != -1) {
        document.querySelector('.preview.active div div #' + CSS.escape(b)).after(sweetness_div)
    }
    document.querySelectorAll('.ice_customisation button, .sweetness_customisation button').forEach(button => {
        button.style.background = "#efefef"
    })
    document.querySelectorAll('#' + b).forEach(div => {
        if (div.id[0] != "h") {
            div.classList.add('ice')
        }
        if (listOfSweetness.search(document.querySelector('.preview.active div div #' + CSS.escape(b)).id) != -1) {
            div.classList.add('sweetness')
        }
    })
}

function toggleOffAllRadioButtons() {
    document.querySelectorAll('.customizationMenu, .beveragesMenu, .setMenu').forEach(a => {
        a.checked = false;
    })
    document.querySelectorAll('.beverages').forEach(div => {
        div.style.background = "#fff";
    })
    document.querySelectorAll('.sets').forEach(div => {
        div.style.background = "#fff";
    })
    document.querySelectorAll('.customizationDiv div button').forEach(buttons => {
        buttons.style.background = "#efefef"
        buttons.style.border = "1px solid #767676"
        buttons.style.borderRadius = "3px"
    })
    
    document.querySelectorAll('.preview .price').forEach(list => {
        updatePrice = parseInt(list.textContent.substring(1))
        list.classList.forEach(function (value) {
            switch (value) {
                case 'two':
                    updatePrice -= 2
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('two')
                    break
                case 'three':
                    updatePrice -= 3
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('three')
                    break
                case 'six':
                    updatePrice -= 6
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('six')
                    break
                case 'twenty-one':
                    updatePrice -= 21
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('twenty-one')
                    break
                case 'twenty-two':
                    updatePrice -= 22
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('twenty-two')
                    break
                case 'twenty-three':
                    updatePrice -= 23
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('twenty-three')
                    break
                case 'twenty-five':
                    updatePrice -= 25
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('twenty-five')
                    break
                case 'twenty-six':
                    updatePrice -= 26
                    list.innerHTML = '$'+ (updatePrice).toString()
                    list.classList.remove('twenty-six')
                    break
            }
        })
    })

    document.querySelectorAll('.preview.active div div div').forEach(main => {
        if (main.classList.length != 1) {
            c = main.id
            document.querySelectorAll('#' + c).forEach(div => {
                if (div.classList.value.search("ice") != -1) {
                    div.classList.remove('ice')
                    document.querySelectorAll('.ice_customisation').forEach(smol => {
                        smol.remove()
                    })
                }
                if (div.classList.value.search("sweetness") != -1) {
                    div.classList.remove('sweetness')
                    document.querySelectorAll('.sweetness_customisation').forEach(smol => {
                        smol.remove()
                    })
                }
            })
            document.querySelectorAll("[name='ice'], [name='sweetness']").forEach(cell => {
                cell.checked = false
            })
        }
    })

    active = document.querySelector('.preview.active')
    if (active.classList.length != 2) {
        if (active.classList.length == 3) {
            switch (active.classList.item(2)) {
                case "beverage":
                    active.classList.remove('beverage')
                    document.querySelector('.mustSelectBeverage').remove()
                    break
                case "set":
                    active.classList.remove('set')
                    document.querySelector('.mustSelectSet').remove()
                    break
            }
        } else {
            active.classList.remove('beverage')
            document.querySelector('.mustSelectBeverage').remove()
            active.classList.remove('set')
            document.querySelector('.mustSelectSet').remove()
        }
    }
}

class Node {
    constructor(data = null) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor(head = null) {
        this.head = head
        this.tail = null
    }

    append(n) {
        if (this.head) {
            let pointer = this.tail
            pointer.next = new Node(n)
            this.tail = pointer.next
        } else {
            this.head = new Node(n)
            this.tail = this.head
        }
    }

    size() {
        let count = 0
        let pointer = this.head
        while (pointer) {
            count++
            pointer = pointer.next
        }
        return count
    }
    
    display() {
        let pointer = this.head
        if (pointer) {
            while (pointer) {
                console.log(pointer.data)
                pointer = pointer.next
            }
        }
    }

    return(n) {
        let count = 0
        let pointer = this.head
        if (pointer) {
            while (pointer && count != n) {
                pointer = pointer.next
                count++
            }
        }
        return pointer.data
    }

    remove(n) {
        let count = 0
        let pointer = this.head
        if (pointer) {
            while (pointer && count != (n-1)) {
                pointer = pointer.next
                count++
            }
            pointer.next = pointer.next.next
        }
    }

    clear() {
        this.head = null
    }
}

function addToCart() {
    active = document.querySelector('.preview.active')
    if (active.classList.length != 2) {
        if (active.classList.length == 3) {
            switch (active.classList.item(2)) {
                case "beverage":
                    active.classList.remove('beverage')
                    document.querySelector('.mustSelectBeverage').remove()
                    break
                case "set":
                    active.classList.remove('set')
                    document.querySelector('.mustSelectSet').remove()
                    break
            }
        } else {
            active.classList.remove('beverage')
            document.querySelector('.mustSelectBeverage').remove()
            active.classList.remove('set')
            document.querySelector('.mustSelectSet').remove()
        }
    }
    var mustSelectBeverage = document.createElement('p')
    mustSelectBeverage.style.color = "#f52323"
    mustSelectBeverage.style.paddingBottom = "0rem"
    mustSelectBeverage.textContent = "Please select a beverage."
    mustSelectBeverage.className = "mustSelectBeverage"
    var mustSelectSet = document.createElement('p')
    mustSelectSet.style.color = "#f52323"
    mustSelectSet.style.paddingBottom = "0rem"
    mustSelectSet.textContent = "Please select a set."
    mustSelectSet.className = "mustSelectSet"
    
    if (document.querySelector('.preview.active .header').classList.length == 2) {
        output = "idouble_" + document.querySelector('.preview.active').getAttribute('data-target') + " "
    } else {
        output = "i" + document.querySelector('.preview.active').getAttribute('data-target') + " "
    }

    if (document.querySelector('.preview.active div .customizationDiv') != null) {
        document.querySelectorAll('.preview.active div .customizationDiv div').forEach(item => {
            identifier = ""
            if (item.id == "ice") {
                identifier = "b"
            } else {
                identifier = "c"
            }
            checkboxChecked = false
            document.querySelectorAll('.allCheckBoxesCustomization [name=' + item.id + ']').forEach(checkbox => {
                if (checkbox.checked == true) {
                    output += identifier + checkbox.id + " "
                    checkboxChecked = true
                }
            })
            if (checkboxChecked == false) {
                output += identifier + item.id + "_normal "
            }
        })
    }
    
    if (document.querySelector('.preview.active div .setDiv') != null) {
        checkboxSetChecked = false
        document.querySelectorAll('.allDaySetOption input').forEach(checkbox => {
            if (checkbox.checked == true) {
                output += "s" + checkbox.id + " "
                checkboxSetChecked = true
            }
        })
        if (checkboxSetChecked == false) {
            active.append(mustSelectSet)
            active.classList.add('set')
        }
    }
    if (document.querySelector('.preview.active div .beveragesDiv') != null) {
        checkboxBeverageChecked = false
        document.querySelectorAll('.allBeveragesCustomization input').forEach(checkbox => {
            if (checkbox.checked == true) {
                output += "b" + checkbox.id + " "
                checkboxBeverageChecked = true
                checkboxIceChecked = false
                checkboxSweetnessChecked = false
                if (checkbox.id[0] != "h") {
                    document.querySelectorAll('.allCheckBoxesCustomization [name=ice]').forEach(iceCheckbox => {
                        if (iceCheckbox.checked == true) {
                            output += "b" + iceCheckbox.id + " "
                            checkboxIceChecked = true
                        }
                    })
                    if (checkboxIceChecked == false) {
                        output += "bice_normal "
                    }
                }
                listOfSweetness = "iced_coffee iced_lemon_tea iced_milk_tea iced_coffee_latte iced_matcha_latte"
                if (listOfSweetness.search(checkbox.id) != -1) {
                    document.querySelectorAll('.allCheckBoxesCustomization [name=sweetness]').forEach(sweetnessCheckbox => {
                        if (sweetnessCheckbox == true) {
                            output += "b" + sweetnessCheckbox.id + " "
                            checkboxSweetnessChecked = true
                        }
                    })
                    if (checkboxSweetnessChecked == false) {
                        output += "bsweetness_normal "
                    }
                }
            }
        })
        if (checkboxBeverageChecked == false) {
            active.append(mustSelectBeverage)
            active.classList.add('beverage')
        }
    }
    output += "p" + document.querySelector('.preview.active .price').textContent.substring(1)
    if (active.classList.length == 2) {
        toggleOffAllRadioButtons();
        document.querySelector('.preview.active').classList.remove('active');
        previewContainer.style.display = 'none';
        count = parseInt(document.querySelector('.cart_count').textContent)
        count++
        document.querySelector('.cart_count').textContent = count
        output += "|"
        console.log(output)
        return output
    } else {
        return ""
    }
}

getMemberJSON = JSON.parse(localStorage.getItem("memberJSON"))
getRecordsJSON = JSON.parse(localStorage.getItem("recordsJSON"))

targetUserID = ""
targetUserRow = 0

let points = 0
let targetPoints = document.querySelector('#points')
let pointsCounter = 0

function activatePoints() {
    setInterval(() => {
        if (pointsCounter == points) {
            clearInterval()
        } else {
            pointsCounter++
            targetPoints.innerHTML = pointsCounter + " / 250 points"
        }
    }, (65 - Math.round(points / 250 * 100)))
    if (points < 250) {
        document.documentElement.style.setProperty('--my-end-stroke', 660 * (1 - points / 250))
    } else {
        document.documentElement.style.setProperty('--my-end-stroke', 0)
    }
}

function loadRecords() {
    appendTarget = document.querySelector('.scroll_records')
    for (const loadRecordRow in getRecordsJSON) {
        eachTarget = getRecordsJSON[loadRecordRow]
        if (eachTarget.MemberID == targetUserID) {
            var newMainDiv = document.createElement("div")
            var newImg = document.createElement("img")
            var newSubDiv = document.createElement("div")
            var newP1 = document.createElement("p")
            var newP2 = document.createElement("p")
            var newP3 = document.createElement("p")
            var newP4 = document.createElement("p")
            newMainDiv.className = "record_container"
            newSubDiv.className = "record_contents"
            newP1.className = "record_amount"
            newP2.className = "record_price"
            newP3.className = "record_date"
            newP4.className = "record_time"
            newImg.src = eachTarget.Img
            newP1.textContent = "Amount: " + eachTarget.Record
            newP2.textContent = "Price: $" + eachTarget.Price
            newP3.textContent = "Date: " + eachTarget.Date
            newP4.textContent = "Time: " + eachTarget.Time
            appendTarget.appendChild(newMainDiv)
            newMainDiv.appendChild(newImg)
            newMainDiv.appendChild(newSubDiv)
            newSubDiv.appendChild(newP1)
            newSubDiv.appendChild(newP2)
            newSubDiv.appendChild(newP3)
            newSubDiv.appendChild(newP4)
        }
    }
    document.querySelector('.member_name').textContent = "Name: " + getMemberJSON[targetUserRow].Name
    document.querySelector('.member_ID').textContent = "ID: " + getMemberJSON[targetUserRow].MemberID
    document.querySelector('.member_birth').textContent = "Birth Month: " + getMemberJSON[targetUserRow].BirthMonth
}

function checkLogin(a) {
    userID = document.querySelector('.login_panel div .member_login_id').value
    userPassword = document.querySelector('.login_panel div .member_login_password').value
    validLogin = false
    if (a.parentElement.classList.length == 2) {
        a.classList.remove("invalid")
        document.querySelector('.invalid_login').remove()
    }
    for (const loadMemberInfo in getMemberJSON) {
        getMemberInfo = getMemberJSON[loadMemberInfo]
        if (getMemberInfo.MemberID == userID) {
            if (getMemberInfo.MemberPassword == userPassword) {
                validLogin = true
                document.querySelector('.member_login').style.display = "none"
                document.querySelector('.member_content').style.display = "flex"
                targetUserID = getMemberInfo.MemberID
                targetUserRow = getMemberInfo.MemberCode - 1
                points = getMemberInfo.MemberPoints
                loadRecords()
                activatePoints()
                localStorage.setItem("currentMember", targetUserID)
                document.querySelector('.sign_out').style.display = "block"
            }
        }
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
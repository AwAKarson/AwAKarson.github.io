ProductPrice = localStorage.getItem("productPrice")

function receiptOnload() {
    document.querySelector('.receipt_price').textContent = "$" + ProductPrice
    document.querySelector('.receipt_number').textContent = Math.floor(Math.random() * 100)
    localStorage.setItem("orders", "")
}

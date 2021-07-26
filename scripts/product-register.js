import Product from '../elements/Product.js'

let id= 0;

const form = document.getElementById("customer-form")

form.addEventListener("submit", function(evt) {
    evt.preventDefault()
    id +=1
    
    let tradeMark = document.getElementById("tradeMark").value
    let model = document.getElementById("model").value
    let amount = document.getElementById("amount").value

    
    let product = new Product(tradeMark,model,amount)

    localStorage.setItem(`P${id}`,JSON.stringify(product))
})
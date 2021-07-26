import Customer from '../elements/Customer.js'
import { customersData } from '../data/customer-data.js'
//import { app } from './api'
//const path = require('path')
//const fs = require('fs') 

// function appendNewCustomer(text) {
//      fs.writeFile(path('.data/customer-data.js'),text)
// }

let id=0;

const form = document.getElementById("customer-form")

form.addEventListener("submit", function(evt) {
    evt.preventDefault()
    id +=1
    
    let name = document.getElementById("name").value
    let lastname = document.getElementById("lastname").value
    let address = document.getElementById("address").value
    let house = document.getElementById("house").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    
    let customer = new Customer(name,lastname,address,house,city,state)
    //customersData.push(customer)
    //appendNewCustomer(JSON.stringify(customersData))
    localStorage.setItem(`C${id}`,JSON.stringify(customer))
})
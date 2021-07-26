import express from 'express'
import { customersData } from '../data/customer-data.js'
const app = express()

function getCustomers(){
    return customersData
}

app.get('/customer-data', (_,response) => {
    response.json(getCustomers())
})

app.listen(80, () => { console.log('API is on') })

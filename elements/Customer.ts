class Customer{

    id: number
    name: string
    lastname: string
    address: string
    house: number
    city: string
    state: string

    constructor(id: number,name: string,lastname: string,address: string,house: number,city: string,state: string){
        this.id = id
        this.name = name
        this.lastname = lastname
        this.address = address
        this.house = house
        this.city = city
        this.state = state
    }
}

export = Customer;
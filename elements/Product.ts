enum ProductType {
    Electronic = 'Eletrônicos',
    Smartphone = 'Celulares',
    Gadgets = 'Gadgets'
}

class Product{

    tradeMark: string
    model: string
    amount: number
    productType: ProductType
    
    constructor(tradeMark: string, model: string, amount: number, productType: ProductType){
        this.tradeMark = tradeMark
        this.model = model
        this.amount = amount
        this.productType = productType
    }

}

export = Product;
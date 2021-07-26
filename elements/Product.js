"use strict";
var ProductType;
(function (ProductType) {
    ProductType["Electronic"] = "Eletr\u00F4nicos";
    ProductType["Smartphone"] = "Celulares";
    ProductType["Gadgets"] = "Gadgets";
})(ProductType || (ProductType = {}));
var Product = /** @class */ (function () {
    function Product(tradeMark, model, amount, productType) {
        this.tradeMark = tradeMark;
        this.model = model;
        this.amount = amount;
        this.productType = productType;
    }
    return Product;
}());
module.exports = Product;

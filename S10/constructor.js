var Product = /** @class */ (function () {
    function Product(productName, price, rating) {
        this.productName = "";
        this.price = 0;
        this.rating = 0;
        this.productName = productName;
        this.price = price;
        this.rating = rating;
    }
    Product.prototype.display = function () {
        console.log(this.productName, this.price, this.rating);
    };
    Product.prototype.changeRating = function (newRating) {
        this.rating = newRating;
        this.display();
    };
    return Product;
}());
var product1 = new Product("Iphone 17", 90000, 4.3);
product1.display();
var product2 = new Product("Samasung", 100000, 4.7);
product2.display();

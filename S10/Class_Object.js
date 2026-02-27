var Product = /** @class */ (function () {
    function Product() {
        this.productName = "Iphone 17";
        this.price = 90000;
        this.rating = 4.5;
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
var product1 = new Product();
product1.display();
var product2 = new Product();
product2.display();

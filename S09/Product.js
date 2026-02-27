var Product = /** @class */ (function () {
    function Product() {
        this.productName = "Iphone 16";
        this.price = 12345;
        this.rating = 4.5;
    }
    Product.prototype.display = function () {
        console.log(this.productName, this.price, this.rating);
    };
    return Product;
}());
var obj1 = new Product();
var obj2 = new Product();
obj2.productName = "Samsung Galaxy";
obj2.rating = 4.2;
obj2.price = 95000;
console.log(obj1);
console.log(obj2);
obj1.display();
obj2.display();

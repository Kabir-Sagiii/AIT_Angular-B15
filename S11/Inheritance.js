var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, name, gender, role) {
        this.id = "";
        this.name = "";
        this.gender = "";
        this.role = "";
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.role = role;
    }
    User.prototype.login = function () {
        console.log("user logged-in");
    };
    User.prototype.logout = function () {
        console.log("user.logged out");
    };
    return User;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(numberOfOrder, id, name, gender, role) {
        var _this = _super.call(this, id, name, gender, role) || this; // calling parent class constructor
        _this.numberOfOrder = 0;
        _this.numberOfOrder = numberOfOrder;
        return _this;
    }
    Customer.prototype.addTocart = function () {
        console.log("added in cart");
    };
    Customer.prototype.removeFromCart = function () {
        console.log("removed from cart");
    };
    Customer.prototype.login = function () {
        _super.prototype.login.call(this);
        console.log("customer is logging in");
        _super.prototype.logout.call(this);
    };
    Customer.prototype.logout = function () {
        console.log("customer is loggedout");
    };
    return Customer;
}(User));
var custome1 = new Customer(5, "s101", "raj", "male", "customer");
custome1.login();
custome1.addTocart();
custome1.logout();
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(isLoggedIn, id, name, gender, role) {
        var _this = _super.call(this, id, name, gender, role) || this;
        _this.isLoggedIn = "";
        _this.isLoggedIn = isLoggedIn;
        return _this;
    }
    Admin.prototype.addProductInDashboard = function () {
        console.log("added in cart");
    };
    Admin.prototype.removeProductFromDashboard = function () { };
    return Admin;
}(User));
var admin = new Admin("true", "s123", "vaishanvi", "female", "admin");
admin.login();
admin.addProductInDashboard();
admin.logout();

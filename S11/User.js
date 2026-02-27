var User = /** @class */ (function () {
    function User() {
        this.id = 0;
        this.uname = "";
    }
    User.changeCity = function (newCity) {
        this.city = newCity;
        console.log(User.city);
        //  console.log(this.id,this.uname)
    };
    User.prototype.display = function () {
        console.log(this.id, this.uname, User.city);
    };
    User.city = "";
    return User;
}());
User.changeCity("Mumbai");

var User = /** @class */ (function () {
    function User(name, age) {
        this.name = "";
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log(this.name, this.age, User.city);
    };
    User.city = "hyd";
    return User;
}());
var user1 = new User("raj", 21);
var user2 = new User("rohan", 25);
var user3 = new User("sima", 32);
user1.display();
user2.display();
user3.display();
// console.log(user1)
// console.log(user2)
// console.log(user3)

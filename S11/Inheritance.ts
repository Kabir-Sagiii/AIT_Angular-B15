class User {
     id:string = ""
    name:string=""
    gender:string=""
    role:string=""

    constructor(id:string,name:string,gender:string,role:string){
  this.id = id;
  this.name = name;
  this.gender = gender;
  this.role = role
    }

    login(){
console.log("user logged-in")
    }
    logout(){
console.log("user.logged out")
    }
}

class Customer extends User {

    numberOfOrder:number = 0;

    constructor(numberOfOrder:number,id:string,name:string,gender:string,role:string){
         super(id,name,gender,role) // calling parent class constructor
        this.numberOfOrder = numberOfOrder
    }
    addTocart(){
        console.log("added in cart")
    }
    removeFromCart(){
        console.log("removed from cart")
    }
    login(){
        super.login()
        console.log("customer is logging in")
        super.logout()
    }

    logout(){
        console.log("customer is loggedout")
    }

}

var custome1 = new Customer(5,"s101","raj","male","customer")
custome1.login()
custome1.addTocart()
custome1.logout()

class Admin extends User {
    isLoggedIn:string =""

    constructor(isLoggedIn:string,id:string,name:string,gender:string,role:string){
        super(id,name,gender,role)
        this.isLoggedIn = isLoggedIn
    }
    addProductInDashboard(){
        console.log("added in cart")
    }
    removeProductFromDashboard(){}


}

var admin = new Admin("true","s123","vaishanvi","female","admin")
admin.login()
admin.addProductInDashboard()
admin.logout()
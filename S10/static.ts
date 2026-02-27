class User {
    name:string=""
    age:number=0
    static city:string="hyd"

    constructor(name:string,age:number){
      this.name = name;
      this.age=age
      
    }

      display(){
        console.log(this.name,this.age,User.city)
      }

}

   var user1=  new User("raj",21)
   var user2=  new User("rohan",25)
   var user3=  new User("sima",32)

   user1.display()
   user2.display()
   user3.display()

// console.log(user1)
// console.log(user2)
// console.log(user3)
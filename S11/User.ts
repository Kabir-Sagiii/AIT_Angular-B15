class User {
 id:number = 0;
 uname:string="";
 static city:string=""

 static changeCity(newCity:string){
   this.city = newCity
   console.log(User.city)
    //  console.log(this.id,this.uname)
 }

 display(){
    console.log(this.id,this.uname,User.city)
 }

}

User.changeCity("Mumbai")
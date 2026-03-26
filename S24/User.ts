function DefaultValue(value:any,context:ClassFieldDecoratorContext){
console.log("decorator is called")
    //  console.log(value)
//  console.log(context)
return function(para):string {
    // console.log(value)
    // console.log(para)
    // console.log("decorator returned function")
    return  para !== undefined ? para : 'Guest'
    
}

}

function Default(value:any,context:ClassMethodDecoratorContext){ //Decorator Function
// console.log("Decorator is called")
// console.log(value);
// console.log(context)
// value();

return function(){
    console.log("admin verification")

     if(this.userRole ==="admin"){
          value()
     }else {
        console.log("Only Admin can delete or create User")
     }

//     //
//    console.log("Decorator is called")
//    value()
}
    
}







class User {

@DefaultValue
userRole:string ; ;

@Default
deleteData(){

    console.log("User Deleted")
}

@Default
createUser(){
    console.log("user created")
}


}



 var U1 = new User();
 console.log(U1.userRole)
 
// //  U1.deleteData();
// //  U1.display()

// U1.createUser()
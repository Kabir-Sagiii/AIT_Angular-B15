interface IUser {
    name:string ;
    gender:string;
    phone:number;
    isMarried?:boolean
    display():void
    changeName?(newName:string):void
    
}

var user1 : IUser = {
    name:"rohan",
    gender:"male",
    phone:999999,

    display:function(){
        console.log("info is displayed")
    }
   
}

class MyUser implements IUser {
    name:string = "raj";
    gender:string = "male";
    phone:number = 99999;
    
    display(): void {
        console.log(this.name,this.gender,this.phone,)
    }

    changeCity(newName:string): void {
        this.name = newName
    }
}

class CompanyUser implements IUser {
    name:string = "raj";
    gender:string = "male";
    phone:number = 99999;
    
    display(): void {
        console.log(this.name,this.gender,this.phone,)
    }

    changeCity(newName:string): void {
        this.name = newName
    }
}
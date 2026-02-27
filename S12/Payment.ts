class Payment {
cardNo:number=0;
    cvv : number = 0;
    cardName:string = ""
    username:string = ""
    amount:number = 0

    payAmount(){
       
        console.log("payment don using")
    }
}



class Credit extends Payment{

    

    payAmount(): void {
        this.amount =  this.amount - 0.1
        console.log("payment done using credit card",this.amount)
    }


}

class Debit extends Payment{

    
    payAmount(): void {
           this.amount= this.amount + 100
        console.log("payment done through debit card")
    }


}

class UPI extends Payment{

    
     payAmount(): void {
          
        console.log("payment done through debit card",this.amount)
    }


}

//   var d1 = new Debit()
//    d1.payAmountUsingDebit()

//   var c1 = new Credit()
//   c1.payAmountUsingCredit()

//   var up1 = new UPI()
//   up1.payAmountUsingUPI()


// function payAmount(payment:Payment){
//    if(typeof payment ==="Credit"){
//     payment.payAmountCredit()
//    }else if(typeof payment ==="Debit"){
//     payment.payAmountDebit()
//    }
// }


     function payAmount(payment:Payment){
        payment.payAmount()
     }

     payAmount(new UPI())
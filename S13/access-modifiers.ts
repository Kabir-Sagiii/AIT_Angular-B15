class Payment {

   protected orderNumber:number = 1

   protected  payAmount(amount:number)  {
       console.log("amount is paid",this.orderNumber)
      
    }
}

class Debit extends Payment {

    payAmount(amount: number): void {
        console.log(this.orderNumber,"payment done using debit card")
    }
}

var p1 = new Payment()
console.log(p1.orderNumber)
p1.payAmount(90000)

var d1 = new Debit()
d1.payAmount(1000)
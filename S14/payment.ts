abstract class Payment {

    generateReceipt(){
        console.log("Generated Receipt")
    }

    validateAmount(amount:number):number{
        console.log("Amount Validated")
        return amount
    }

    abstract pay(amount:number):void ;
}

class Credit  extends Payment {

    pay(amount:number) {
        this.validateAmount(amount)
        console.log("Amount is payed",amount)
        this.generateReceipt()
       
    }
}

class Debit extends Payment {

    pay(amount:number): void {
        this.validateAmount(amount)
        console.log("Amount is paid",amount)
        this.generateReceipt()
    }

}

class Upi extends Payment{

    pay(amount: number): void {
         this.validateAmount(amount)
        console.log("Amount is paid",amount)
        this.generateReceipt()
    }
}


     function doPayment(payment:Payment,amount:number){
                  payment.pay(amount)
     }

     doPayment(new Credit(),9999)

     doPayment(new Debit(),7777)

     doPayment(new Upi(),4444)
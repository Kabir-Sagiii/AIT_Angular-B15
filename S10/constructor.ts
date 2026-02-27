class Product {
    productName:string = "" ;
    price:number = 0 ;
    rating:number = 0 ;
    static category:string = ""

   

    constructor(productName:string,price:number,rating:number){
        this.productName = productName
        this.price = price
   this.rating = rating
    }

    

    display(){
        console.log(this.productName,this.price,this.rating)
    }

    changeRating(newRating:number){
     this.rating = newRating
     this.display()
    }

   static changeCategoryName(newCategory:string){
     this.category = newCategory
    }
}

  const product1= new Product("Iphone 17",90000,4.3)
  product1.display()

  const product2 = new Product("Samasung",100000,4.7)

  product2.display()

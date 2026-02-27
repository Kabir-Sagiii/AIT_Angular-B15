class Product {
    productName:string = "Iphone 17"
    price:number = 90000
    rating:number = 4.5;

    display(){
        console.log(this.productName,this.price,this.rating)
    }

    changeRating(newRating:number){
     this.rating = newRating
     this.display()
    }
}

  const product1= new Product()
  product1.display()

  const product2 = new Product()

  product2.display()

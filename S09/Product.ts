class Product {

    productName:string = "Iphone 16";
    price:number = 12345;
    rating : number = 4.5;

    display(){
         console.log(this.productName,this.price,this.rating)
    }

     

}

  var obj1  = new Product()

  var obj2  = new Product()
 

  obj2.productName = "Samsung Galaxy"
  obj2.rating = 4.2
  obj2.price = 95000

   console.log(obj1)
  console.log(obj2)

  obj1.display();

  obj2.display()


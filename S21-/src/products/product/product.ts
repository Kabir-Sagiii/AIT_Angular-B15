import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
    productAddedIncart : number[] = []
    element:any = {id:"",name:"",image:"",price:"",description:""}

     actionOnCart(event:any,product:any){
         
           if(event.target.innerText === "Add to Cart"){
             
           this.addProductToCart(product)
           }else {
              this.removeFromCart(product)
           }
        }

        removeFromCart(product:any){
         this.productAddedIncart =   this.productAddedIncart.filter((id)=>{return product.id !== id})
        }

        addProductToCart(product:any){
        this.productAddedIncart.push(product.id)
        }
}

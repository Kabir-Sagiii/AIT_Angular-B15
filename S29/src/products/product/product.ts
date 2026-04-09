import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productservice } from '../services/productservice';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
    productAddedIncart : number[] = []
  @Input()  element:any = {id:0,name:"",image:"",price:0,description:"",category:"",rating:0}


    constructor(private productdetails:Productservice){

    }

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

        getProductDetails(){
         this.productdetails.productData = this.element
        }
}

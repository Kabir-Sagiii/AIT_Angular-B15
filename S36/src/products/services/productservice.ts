import { Injectable } from '@angular/core';

interface IProduct {
    id:number,
    name:string,
    image:string,
    description:string,
    rating:number,
    price:number,
    category:string
}

@Injectable({
  providedIn: 'root',
})
export class Productservice {
   productData : IProduct = {
  id:0,
  name:"",
  category:"",
  description:"",
  rating:0,
  price:0,
  image:""
   }
}

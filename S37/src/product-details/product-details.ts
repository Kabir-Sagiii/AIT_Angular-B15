import { Component } from '@angular/core';
import { Productservice } from '../products/services/productservice';
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {


  constructor(protected productdetails:Productservice){

  }
}

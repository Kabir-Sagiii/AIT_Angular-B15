import { Component,inject,ChangeDetectionStrategy,ChangeDetectorRef, OnInit } from '@angular/core';

import { Product } from './product/product';
import { Categories } from './categories/categories';
import { HttpClient } from '@angular/common/http';
import { CustompipePipe } from '../custom-pipe/custompipe-pipe';
import { IProducts } from './model/products.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [Categories,Product,CustompipePipe,AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
 
})
export class Products implements OnInit {

   httpClient = inject(HttpClient);
   allProducts:Observable<IProducts[]> | null =null
  selectedCategory:string = "all"
  // anotherData :IProducts[]= []
  


     getCategoryName(categoryName:string){ 
          this.selectedCategory = categoryName
        }

  getProducts(){
this.allProducts = this.httpClient.get<IProducts[]>("https://fakestoreapi.com/products")

        }
       
        ngOnInit() {
          this.getProducts()
        }

}

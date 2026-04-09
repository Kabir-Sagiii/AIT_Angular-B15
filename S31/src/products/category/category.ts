import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

     @Input() categoryData:any = {url:"",category:""}

     @Output() categoryCustomEvent = new EventEmitter()

     filterProductsBasedOnCategory(categoryName:string){
        this.categoryCustomEvent.emit(categoryName)
     }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

     @Input() categoryData:any = {url:"",category:""}
}

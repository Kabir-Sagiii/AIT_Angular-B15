import { Component } from '@angular/core';
import { DataS } from '../data-s';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  imports: [FormsModule],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {
username:string = ""
    constructor(private data:DataS){

    }

     getUserName(){
      this.data.updateData(this.username)
     }
}

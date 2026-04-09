import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-d',
  imports: [],
  templateUrl: './structural-d.html',
  styleUrl: './structural-d.css',
})
export class StructuralD {

    data : boolean = false

    showElement(){
   this.data = true
    }
    hideElement(){
this.data = false
    }
}

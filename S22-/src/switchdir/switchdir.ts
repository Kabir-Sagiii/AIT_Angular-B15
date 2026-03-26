import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdir',
  imports: [],
  templateUrl: './switchdir.html',
  styleUrl: './switchdir.css',
})
export class Switchdir {
  
  selectedOption:string = "angular"

   changeSelectedOption(event:any) {
    this.selectedOption = event.target.value
   }

  
}

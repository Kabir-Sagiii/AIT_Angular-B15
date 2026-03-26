import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingtask',
  imports: [],
  templateUrl: './bindingtask.html',
  styleUrl: './bindingtask.css',
})
export class Bindingtask {

  inputValue:string = ""
  getInputData(event:any){
   this.inputValue= event.target.value

  }
}

import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-name',
  imports: [FormsModule],
  templateUrl: './name.html',
  styleUrl: './name.css',
})
export class Name {

    inputData:string = ""

  //create a custom event
     @Output() myCustomEvent = new EventEmitter()


       sendChildData(){
        this.myCustomEvent.emit(this.inputData)
       }

  
}

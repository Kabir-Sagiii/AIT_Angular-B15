import { Component } from '@angular/core';

@Component({
  selector: 'app-divcontainer',
  imports: [],
  templateUrl: './divcontainer.html',
  styleUrl: './divcontainer.css',
})
export class Divcontainer {

   disabled : boolean = true
  editable:string = "true"
  isDraggable:boolean = true

     enableDiableEditing(status:boolean){
            if(status){
              this.editable = "true"
    this.disabled = true
    this.isDraggable = true
            }else {
               this.editable = "false"
    this.disabled = false
    this.isDraggable = false
            }
     }

  // enableEditing(){
  //   this.editable = "true"
  //   this.disabled = true
  //   this.isDraggable = true
  // }

  // diableEditing(){
  //   this.editable = "false"
  //   this.disabled = false
  //   this.isDraggable = false
  // }
}

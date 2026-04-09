import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-attribute-dir',
  imports: [CommonModule],
  templateUrl: './attribute-dir.html',
  styleUrl: './attribute-dir.css',
})
export class AttributeDir {

  colorName:string = "green"
  fontsize:string="32px"
  changeTheme:boolean = false

   changeColor(colorValue:string){
    this.colorName= colorValue

   }

   changeFontSize(event:any){
    this.fontsize = event.target.value

   }

   fnChangeTheme(event:any){
    this.changeTheme = event.target.checked
   }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-profilecard',
  imports: [],
  templateUrl: './profilecard.html',
  styleUrl: './profilecard.css',
})
export class Profilecard {
   image:string = "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg"
   userName:string = "Rohan Jaiswal"
   description:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime est!"
   btnText:string = "Change to Riya Profile"
   disabled:boolean = false

   changeProfile():void {

      if(this.userName ==="Rohan Jaiswal"){
this.image="https://i.pinimg.com/736x/ad/15/5b/ad155b4cfd5b6d220c3e5b51b349a37a.jpg",
     this.userName = "Riya Verma"
     this.description = "She is Frontend Developer with 10+ yr Experience"
    this.btnText = "Change to Rohan Profile"
      }else {
        this.image="https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
     this.userName = "Rohan Jaiswal"
     this.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime est!"
    this.btnText = "Change to Riya Profile"
      }

     
   }
  }

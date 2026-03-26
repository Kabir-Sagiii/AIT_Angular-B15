import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  title = "My-First-Variable";

  anotherTitle :string = "Ecomm AI-Mart"
 

  links = ["Home","My-Profile","All-Products","ContactUs"]


  changeTitle(){
    this.anotherTitle = "hi"
  }

}

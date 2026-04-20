import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';
CommonModule
@Component({
  selector: 'app-template-dform',
  imports: [FormsModule],
  templateUrl: './template-dform.html',
  styleUrl: './template-dform.css',
})
export class TemplateDform {

  getData(login:any){
    console.log(login)
    console.log(login.value,login.valid,login.invalid)
  }
}

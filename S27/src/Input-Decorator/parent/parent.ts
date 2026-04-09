import { Component } from '@angular/core';
import {Child} from "../child/child"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-parent',
  imports: [Child,CommonModule,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

   data:string = ""

  sendDataToChild:string="......."

  getParentData(){
    this.sendDataToChild = this.data
  }
}

import { Component } from '@angular/core';
import { DataS } from '../data-s';
@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {
   constructor(public data:DataS){}
}

import { Component } from '@angular/core';
import {Name} from "../name/name"
@Component({
  selector: 'app-details',
  imports: [Name],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  childData:string = ""

  getChildData(childData:string) {
this.childData = childData
  }
}

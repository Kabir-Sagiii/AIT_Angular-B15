import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataS {
    data:string = ""

    updateData(newData:string){
 this.data = newData
    }
}

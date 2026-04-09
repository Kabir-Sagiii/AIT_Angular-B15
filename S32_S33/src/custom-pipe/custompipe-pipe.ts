import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
})
export class CustompipePipe implements PipeTransform {

  transformedData:string=""

  transform(value: any,): any {
   this.transformedData= value.toUpperCase()

    return this.transformedData;
  }

}

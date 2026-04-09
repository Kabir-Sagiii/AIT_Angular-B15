import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
filteredUsers:any[] = []
  transform(value: any[], args: string): any {
  
   this.filteredUsers =   value && value.filter((user)=>user.gender===args)
 console.log(this.filteredUsers)
    return this.filteredUsers;
  }

}

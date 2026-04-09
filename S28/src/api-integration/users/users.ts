import { Component,inject,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
  changeDetection:ChangeDetectionStrategy.Default
})

// interface User {

// }
export class Users {
   usersData:any[] = []

   constructor(private httpclient:HttpClient, private cdr:ChangeDetectorRef){

   }
      


  getUsersData(){

    this.httpclient.get("https://randomuser.me/api/?results=10").subscribe({
      next : (resp:any)=>{
this.usersData = resp.results
this.cdr.detectChanges() // 

      },
      error:(error)=>{
console.log("error")
console.log(error)
      }
    })

  //  var obs =  this.httpclient.get("https://randomuser.me/api/?results=10")
  //  obs.subscribe((dataOfBackend)=>{
  //   console.log(dataOfBackend)
  //  })
  }

}

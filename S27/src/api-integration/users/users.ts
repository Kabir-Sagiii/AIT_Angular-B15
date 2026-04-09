import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})

// interface User {

// }
export class Users {
   usersData:any 

   constructor(private httpclient:HttpClient){

   }
      


  getUsersData(){

    this.httpclient.get("https://randomuser.me/api/?results=10").subscribe({
      next : (resp:any)=>{
console.log(resp)
this.usersData = resp.results
console.log(this.usersData)
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

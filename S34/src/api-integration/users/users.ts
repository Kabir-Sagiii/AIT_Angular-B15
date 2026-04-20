import { Component,inject,ChangeDetectionStrategy,ChangeDetectorRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
 import { GenderPipe } from '../../custom-pipe/gender-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule,GenderPipe,FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
  
})


export class Users implements OnInit  {

  selectGender:string= "male"

  users:any | null = null
 httpClient = inject(HttpClient)

  getUsers(){
   this.httpClient.get<any>("https://randomuser.me/api/?results=50").subscribe((data)=>{
    console.log(data)
    this.users = data.results
   })
  }

 ngOnInit(): void {
   this.getUsers()
 }

}

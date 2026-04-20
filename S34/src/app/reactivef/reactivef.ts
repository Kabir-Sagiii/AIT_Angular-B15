import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormControlName,FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivef',
  imports: [ReactiveFormsModule],
  templateUrl: './reactivef.html',
  styleUrl: './reactivef.css',
})
export class Reactivef {


  signupForm = new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password : new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    email:new FormControl("",[Validators.required,Validators.email])
  })


  onSubmit(){
    console.log(this.signupForm.value)
  }


}

import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormControlName,FormArray, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-reactivef',
  imports: [ReactiveFormsModule],
  templateUrl: './reactivef.html',
  styleUrl: './reactivef.css',
})
export class Reactivef {


  signupForm = new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3),CustomValidation.maxLength10]),
    password : new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    
    skills:new FormArray([new FormControl(""),new FormControl(""),new FormControl("")])

  })

  get skills(): FormArray{
return this.signupForm.get("skills") as FormArray
  }

  addSkills(){
    this.skills.push(new FormControl(""))
  }

  onSubmit(){
    console.log(this.signupForm.value)
  }

  removeUI(i:number){
       
       this.skills.removeAt(i)
    //  console.log( this.skills.value)
    
  }

}

class CustomValidation {
static value:string = ""
  static maxLength10(control:AbstractControl):ValidationErrors | null{
   CustomValidation.value = control?.value;
   if(CustomValidation.value && CustomValidation.value.length > 10){
    return {
      maxLength10: true 
    }
   }
    return null
  }
}

import { AbstractControl,ValidationErrors } from "@angular/forms";
import { maxLength } from "@angular/forms/signals";
export class CustomValidation {
    static value:string;
    static CheckMaxLength10(control:AbstractControl):null | ValidationErrors{

          CustomValidation.value=control.value
          if(CustomValidation.value.length > 10) {
            return  {
                maxLengthError : true
            }
          }
        return null
    }

    
}
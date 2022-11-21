import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwdmismatch (control:AbstractControl) :ValidationErrors| null{
    const passwd=control.get('password')?.value;
    const cpasswd=control.get('confirmPassword')?.value;

    if(passwd!=cpasswd){     
            return {'paswdNotMatch':true};  
    }
    return null;
}
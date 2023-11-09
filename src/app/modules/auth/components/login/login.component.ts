import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {getControl} from "../../tools/ReactiveFormTools";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading: boolean = false
  form : FormGroup = new FormGroup<any>({
    email : new FormControl<string>("", {nonNullable: true, validators: [Validators.email, Validators.required]}),
    password : new FormControl<string>("", [Validators.required, Validators.minLength(6)])
  })

  handleLogin() {
    this.form.markAllAsTouched()
    if(this.form.valid) {
      console.log(this.form.value)
    }
  }

  getControl(name: string) {
    return this.form.controls[name];
  }

  isInvalid(name: string) {
    const control = this.getControl(name);
    return control ? control.touched && control.invalid : true;
  }

  hasError(name: string, errorCode: string) {
    const control = this.getControl(name);
    return control ? control.touched && control.hasError(errorCode) : true;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const route : Routes = [
  {path: 'login', component: LoginComponent}
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(route)
  ]
})
export class AuthModule { }

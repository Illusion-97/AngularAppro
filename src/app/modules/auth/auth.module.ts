import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { RegisterComponent } from './components/register/register.component';

const route : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(route)
  ]
})
export class AuthModule { }

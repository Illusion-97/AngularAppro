import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {RegisterFromValue} from "../models/register-from-value";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerPath : string = "/register"
  private loginPath : string = "/login"

  constructor(private http: HttpClient) { }

  register(personne : RegisterFromValue) {
    return this.http.post(`${environment.apiUrl}${this.registerPath}`, personne)
  }
}

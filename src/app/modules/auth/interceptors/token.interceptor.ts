import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {environment} from "../../../../environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private service: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.service.token;
    if(token && request.url.startsWith(environment.apiUrl)) {
      request = request.clone({
        /*headers: {} Ceci remplace les tous headers deja présent*/
        //setHeaders permet d'en ajouter sans supprimer les existants
        setHeaders: {
          Authorization : `Bearer ${token}`
        }
      })
    }
    return next.handle(request).pipe(catchError(err => {
      console.log("in interceptor catchError")
      return throwError(() => err)
    }));
  }
}

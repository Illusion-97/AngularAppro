import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../modules/auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.isLogged().pipe(map(logged => logged || this.router.createUrlTree(['/login'])));
  }

}

export const authGuard = () => {
  const router = inject(Router);
  return inject(AuthService).isLogged()
    .pipe(
      map(logged => logged || router.createUrlTree(['/login']))
    )
}

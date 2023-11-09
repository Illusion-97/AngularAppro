import {inject, Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {FormationService} from "../services/formation.service";
import {Formation} from "../models/formation";

@Injectable({
  providedIn: 'root'
})
export class FormationsResolver implements Resolve<{ content: Formation[]; total: number; }> {
  constructor(private service: FormationService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ content: Formation[]; total: number; }> {
    return this.service.searchByParam(0,20,{});
  }
}

export const formationResolver = () => inject(FormationService).searchByParam(0,20,{});

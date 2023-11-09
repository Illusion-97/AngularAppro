import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, combineLatest, delay, map, Observable, tap} from "rxjs";
import {Filter, Formation} from "../models/formation";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  url = `${environment.apiUrl}/formations`;
  private formation$ = new BehaviorSubject<Formation | null>(null);
  private success$ = new BehaviorSubject<boolean>(false);
  private error$ = new BehaviorSubject<any>(null);
  private loading$ = new BehaviorSubject<boolean>(false);
  private readonly combined$: Observable<[Formation | null, boolean, boolean, any]>;


  constructor(
    private http: HttpClient,
  ) {
    this.combined$ = combineLatest([
      this.getCurrentFormation(),
      this.getSuccess(),
      this.getLoading(),
      this.getError()]);
  }

  getCurrentFormation(): Observable<Formation | null> {
    return this.formation$.asObservable();
  }

  setFormation(formation: Formation | null) {
    this.formation$.next(formation);
  }

  setSuccess(success: boolean) {
    this.success$.next(success);
  }

  setError(error: any) {
    this.error$.next(error);
  }

  setLoading(loading: boolean) {
    this.loading$.next(loading);

  }

  getSuccess(): Observable<boolean> {
    return this.success$.asObservable();

  }

  getError(): Observable<any> {
    return this.error$.asObservable();
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getCombined(): Observable<[Formation | null, boolean, boolean, any]> {
    return this.combined$;
  }

  countByKeyword(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.url}/count${keyword ? '/' + keyword : ''}`);
  }

  getById(id: number): Observable<any> {
    this.setLoading(true)
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      delay(1000),
      tap((data: Formation) => {
        this.setFormation(data);
        this.setSuccess(true);
        this.setLoading(false);
      }),
      catchError((error) => {
        this.setError(error);
        this.setLoading(false);
        return error;
      })
    );

  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  searchByParam(page: number, size: number, filters: Filter) {

    return this.http.get<Formation[]>(`${this.url}`, {
      observe: "response",
      params: this.getHttpParams(filters, page, size)
    })
      .pipe(map(res => {
        return {content: res.body ?? [], total: +(res.headers.get("X-Total-Count") ?? 0)}
      }))
  }

  private getHttpParams(filter: Filter, page?: number, size?: number) {
    page = page ?? 0;
    size = size ?? 20;
    let params = new HttpParams();
    if (filter.priceMin) params = params.set("price_gte", filter.priceMin);
    if (filter.priceMax) params = params.set("price_lte", filter.priceMax);
    if (filter.keywords) params = params.set("title_like", filter.keywords);
    params = params.set("_start", page * size);
    params = params.set("_limit", size);
    return params;
  }


}







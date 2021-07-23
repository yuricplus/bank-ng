import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserInterface } from '../interface/user'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) {}

  apiPayUser(path: string, body?: { [key: string]: any}):Observable<any>{
    return this.http.post<any>(`${environment.URL_API_PAYMENT}${path}`, body)
      .pipe(map(response => response as any | any))
  }
}
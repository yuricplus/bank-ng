import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserInterface } from '../interface/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers(path: string):Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(`${environment.URL_API_USER}${path}`)
      .pipe(map(response => response as UserInterface | any))
  }
}
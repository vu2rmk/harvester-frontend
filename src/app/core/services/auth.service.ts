import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, LoginRsp } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: UserLogin): Observable<LoginRsp>{
    return this.httpClient.post<LoginRsp>(`${environment.api_url}/users/login`,user);
  }
}

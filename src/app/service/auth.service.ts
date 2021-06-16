import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  url = 'http://localhost:4000/api/user'

  login(obj: any) {
    return this.http.post(`${this.url}/login`, obj)
  }

  register(obj: any) {
    return this.http.post(`${this.url}/register`, obj)
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('position')
    localStorage.removeItem('name')
  }

  checkToken() {
    const token: any = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}


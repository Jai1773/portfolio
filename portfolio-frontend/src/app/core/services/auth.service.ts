import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'jwt';
  private loginUrl = '/api/auth/login';
  private logoutUrl = '/api/auth/logout';

  constructor(private http: HttpClient) {}

  login(creds: LoginCredentials): Observable<any> {
    return this.http.post<any>(this.loginUrl, creds);
  }

  logout(): Observable<any> {
    // Clear token locally and inform backend
    localStorage.removeItem(this.tokenKey);
    return this.http.post<any>(this.logoutUrl, {});
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
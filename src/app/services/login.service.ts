import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url= 'http://localhost:8080/api/auth'
  private isAuthenticated:false;
  constructor(private http:HttpClient, private router: Router) { }
  login(credentials:any):Observable<any>{
    const loginUrl= `${this.url}/login`
    return this.http.post(loginUrl,credentials);
  }
  logout(){
    const logoutUrl = `${this.url}/logout`;
    this.isAuthenticated = false;
  }
  navigate(path:string){
    this.router.navigate(['/path'])
  }
}

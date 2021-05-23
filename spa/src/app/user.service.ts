import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post("http://localhost:9017/user/login", user);
  }
  registerUser(data:any){
    return this.http.post("http://localhost:9017/user/register", data)
  }
}

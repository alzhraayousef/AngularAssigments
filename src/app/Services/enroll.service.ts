import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../Shared Classes and types/RegisterUser';
import { LoginUser } from '../Shared Classes and types/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _RegisterUrl:string="http://localhost:3000/register";
  _LoginUrl:string="http://localhost:3000/login";

  constructor(private http:HttpClient) { }

  Register(user:RegisterUser)
  {
   return this.http.post(this._RegisterUrl,user);
  }

  Login(user:LoginUser)
  {
   return this.http.post(this._LoginUrl,user);
  }



}

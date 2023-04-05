import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Shared Classes and types/User';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _userUrl="https://jsonplaceholder.typicode.com/users";
 
  constructor(private http:HttpClient) { }

  GetAllUsers():Observable<User[]>
  {

    return this.http.get<User[]>(this._userUrl).pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
    }));
  }

}

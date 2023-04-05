import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../Shared Classes and types/IUser';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _userUrl="https://jsonplaceholder.typicode.com/users";
 
  constructor(private http:HttpClient) { }

  GetAllUsers():Observable<IUser[]>
  {

    return this.http.get<IUser[]>(this._userUrl).pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
    }));
  }

}

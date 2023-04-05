import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../Shared Classes and types/IPost';
import { IComments} from '../Shared Classes and types/IComments';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PostService {
  _postUrl="https://jsonplaceholder.typicode.com/posts";
  _commentsUrl="https://jsonplaceholder.typicode.com/posts/1/comments";

  constructor(private http:HttpClient) { }
  
  GetAllPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this._postUrl).pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
    }));
  }

  GetAllCommentsByPostID(postID:any):Observable<IComments[]>
  {
    console.log(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    return this.http.get<IComments[]>(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`).pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
    }));
  }
  
}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { IPost } from '../Shared Classes and types/IPost';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList:IPost[]=[];
  errorMessage:string="";
  constructor(private postService:PostService, private router:Router) { }
  
  ngOnInit(): void {
      this.postService.GetAllPosts().subscribe({
      next:data=>this.postList=data,
      error:error=>this.errorMessage=error
    })
  }


  viewPostComments(postID:any)
  {
    this.router.navigate(["/comments",postID]);
  }

}

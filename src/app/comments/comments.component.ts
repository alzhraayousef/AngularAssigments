import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) { }
   postID:any;
    commentsList:any;
    errorMessage:any;

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.postID=params.get("postID");
    })
      
      this.postService.GetAllCommentsByPostID(this.postID).subscribe({
        next:data=>this.commentsList=data,
        error:error=>this.errorMessage=error
      })
    
    }


}

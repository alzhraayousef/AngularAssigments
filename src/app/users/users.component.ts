import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Shared Classes and types/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList:User[]=[];
  errorMessage:string="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe({
      next:data=>this.userList=data,
      error:error=>this.errorMessage=error
    })
  }

}

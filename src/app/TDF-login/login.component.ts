import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../Shared Classes and types/LoginUser';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginModel=new LoginUser("","");

  constructor(private enrollService:EnrollService) { }

  ngOnInit(): void {
  }

  submitData()
  {
    this.enrollService.Login(this.LoginModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
  }

}

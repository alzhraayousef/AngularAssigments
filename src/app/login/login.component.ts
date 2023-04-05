import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Shared Classes and types/enroll.service';
import { LoginUser } from '../Shared Classes and types/LoginUser';

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

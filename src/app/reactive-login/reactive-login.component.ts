import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';
import { ForbiddenNameValidator } from '../validations/userName.validators';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm=this.fb.group({
    userName:['',[Validators.required,ForbiddenNameValidator(/^[A-Z]+[a-z]+$/)]],
    password:['',[Validators.required]],
  })

  constructor(private enrollService:EnrollService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 

  get userName()
  {
    return this.loginForm.get('userName');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  submitData()
  {
    this.enrollService.Login(this.loginForm.value).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
  }

}

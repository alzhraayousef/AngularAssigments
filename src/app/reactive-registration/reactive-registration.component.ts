import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';
import { ForbiddenNameValidator } from '../validations/userName.validators';
import { ForbiddenEmailValidator } from '../validations/email.validators';

@Component({
  selector: 'app-reactive-registration',
  templateUrl: './reactive-registration.component.html',
  styleUrls: ['./reactive-registration.component.scss']
})
export class ReactiveRegistrationComponent implements OnInit {

  Accounts=['facebook','twitter','google'];

  registerationForm=this.fb.group({
    userName:['',[Validators.required,ForbiddenNameValidator(/^[A-Z]+[a-z]+$/)]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    email:['',[Validators.required,ForbiddenEmailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],
    extraaccount:['extra Account']
  },{validator:[ConfirmPasswordValidator]})

  constructor(private enrollService:EnrollService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 

  get userName()
  {
    return this.registerationForm.get('userName');
  }

  get email()
  {
    return this.registerationForm.get('email');
  }

  get password()
  {
    return this.registerationForm.get('password');
  }

  get confirmPassword()
  {
    return this.registerationForm.get('confirmPassword');
  }

  submitData()
  {
    this.enrollService.Register(this.registerationForm.value).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
  }

}

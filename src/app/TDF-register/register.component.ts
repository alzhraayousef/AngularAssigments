import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../Shared Classes and types/RegisterUser';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterModel=new RegisterUser("","","","","extra Account");
  Accounts=['facebook','twitter','google'];

  constructor(private enrollService:EnrollService) { }

  ngOnInit(): void {
  }

  submitData()
  {
    this.enrollService.Register(this.RegisterModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
  }

}

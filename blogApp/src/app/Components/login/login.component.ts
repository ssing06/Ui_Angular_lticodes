import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailService } from '../../Services/user-detail.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm: FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required])
});

  constructor(public router: Router, private userDetail: UserDetailService){}

  ngOnInit(){
    
  }

  login(){
    this.userDetail.getUserDetails().subscribe(resp=>{

      
    });
    this.router.navigate(['/home']);
  }
}

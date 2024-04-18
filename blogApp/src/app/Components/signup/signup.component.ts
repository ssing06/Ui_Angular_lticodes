import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailService } from '../../Services/user-detail.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpForm: FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  name: new FormControl('',[Validators.required,Validators.maxLength(15)]),
  gender: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required])
  });

  constructor(private userDetail: UserDetailService){}
  
  signUp(){
    console.log("formdatas",this.signUpForm.value);
  // var formData = new FormData();
  // formData.append("email",this.signUpForm.get('email')?.value);
  // formData.append("name",this.signUpForm.get('name')?.value);
  // formData.append("gender",this.signUpForm.get('gender')?.value);
  // formData.append("password",this.signUpForm.get('password')?.value);
  //console.log(formData);

  this.userDetail.saveUsers(this.signUpForm.value).subscribe(resp =>{
  console.log("response",resp);
  },
  error =>{
   console.error(error);
  }
  );
}
}

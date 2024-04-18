export class UserDetails {
  emailId: string;
  name: string;
  gender: string;
  password: string;

  constructor(emailId: string, name:string,gender: string,password: string){
  this.emailId = emailId;
  this.name = name;
  this.gender = gender;
  this.password=password;

  }

}

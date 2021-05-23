import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { UserValidator } from '../user.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService:UserService){

  }
  profile = new FormGroup({
    username: new FormControl('', [Validators.required, UserValidator.cannotHaveNumbers, Validators.minLength(5), Validators.maxLength(15)]),
    emailId: new FormControl('', [Validators.required, UserValidator.cannotHaveNumbers, UserValidator.cannotHaveSpace,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), UserValidator.cannotHaveSpace, Validators.maxLength(16), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });
  onSubmit(){
    console.log(this.profile.value);
    this.userService.registerUser(this.profile.value).subscribe(response =>{
      console.log(response);
    })

  }
  get emailId(){
    return this.profile.get('emailId');
  }
  get password(){
    return this.profile.get('password');
  }
  get username(){
    return this.profile.get('username');
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private userService:UserService){

}
  login(data:any){
    var userData={
      role: 'ROLE_CUSTOMER',
      emailId: data.value.emailId,
      password: data.value.password
    }
    this.userService.login(userData).subscribe(response =>{
      console.log(response);
    });
  }
 

}

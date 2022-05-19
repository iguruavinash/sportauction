import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SportsauctionService } from './sportsauction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor(private router: Router) {        
  }
  
  profileForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Age: new FormControl('', Validators.required),
    Gender: new FormControl('', Validators.required),
    Hobbies: new FormControl(''),
    Password: new FormControl('', Validators.required)

  });
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  get f(){
    return this.profileForm.controls;
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);
    this.router.navigate(['/HomePage']);
  }

};

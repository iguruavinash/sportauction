import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css']
})
export class CreateteamComponent implements OnInit {

  constructor() { }

  CreateProfileForm = new FormGroup({
    TeamName: new FormControl('', Validators.required),
    TeamMaxBudget: new FormControl('', Validators.required),
  });
  
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.CreateProfileForm.value);
    //this.router.navigate(['/HomePage']);
  }

  ngOnInit(): void {
  }

}

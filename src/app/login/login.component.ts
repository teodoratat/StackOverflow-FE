import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";
import {needsCleaning} from "@angular/compiler-cli/ngcc/src/packages/build_marker";


interface User{
  username: string;
  password: string;
  formGroup?: FormGroup;

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  isLoggedIn: boolean = false;

  reactiveForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  login() {
    if (!this.username || !this.password) {
      // Handle invalid credentials
      return;
    }

    // Set isLoggedIn to true and assign the entered username to the username property
    this.isLoggedIn = true;
    this.username = this.reactiveForm.controls['username'].value;
  }
}

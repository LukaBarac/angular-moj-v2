import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorExists!: boolean;
  errorText = "";

  constructor(private userService: UserService,
    private router: Router) {}

  NgOnInit(): void {}

  onSubmit(form : NgForm){
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);
    if(!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user with email: " + user;
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if(!isPasswordValid){
      this.errorExists = true;
      this.errorText = "Password is incorrect.";
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']);
  }

}

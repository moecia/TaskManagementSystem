import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service' 
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService,
     private router : Router,
     public messageService: MessageService) { }

  ngOnInit() {
  }

  userLogin(loginForm) {
    this.userService.userAuthentication(loginForm.value.username, loginForm.value.password).
    subscribe((data : any)=>{
    localStorage.setItem('userToken',data.access_token);
    this.router.navigate(['/tasks']);
    });
  }

  userSignup(signupForm) {
    this.userService.userSignup(signupForm.value.email, signupForm.value.pwd, signupForm.value.confirmPwd).
    subscribe();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  loginErrorMessage: string;
  signupErrorMessage: string;

  addLoginMessageError(message: string) {
    this.loginErrorMessage = message;
  }

  addSignupMessageError(message: string) {
    this.signupErrorMessage = message;
  }

  clearAll() {
    this.loginErrorMessage = "";
    this.signupErrorMessage = "";
  }
}

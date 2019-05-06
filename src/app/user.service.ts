import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rootUrl = 'http://localhost:50918';

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private router : Router) { }

  userAuthentication(username, password) {
    var data = "username=" + username + "&password=" + password + "&grant_type=password";
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' })
    };
    return this.http.post(this.rootUrl + '/token', data, httpOptions).
    pipe(catchError(this.loginError()));
  }

  userRemoveAuthentication() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  userSignup(username, password, confirmPassword) {
    let data = `{
      "Email": "${username}",
      "Password": "${password}",
      "ConfirmPassword": "${confirmPassword}"
    }`
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.rootUrl + '/api/Account/Register', data, httpOptions).
    pipe(
      tap(() => window.location.reload()),
      catchError(this.signupError()));
  }

  private loginErrMsg(message: string) {
    this.messageService.clearAll();
    console.log(message);
    this.messageService.addLoginMessageError(message);
  }

  private signupErrMsg(message: string) {
    this.messageService.clearAll();
    console.log(message);
    this.messageService.addSignupMessageError(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private loginError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.loginErrMsg(`${error.error.error_description}`);
      return of(result as T);
    };
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private signupError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.signupErrMsg(`${error.error.ModelState[""][0]}`);
      return of(result as T);
    };
  }
}

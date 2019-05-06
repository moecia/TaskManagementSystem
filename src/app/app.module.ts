import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { HttpClientModule }    from '@angular/common/http';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule }   from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { TaskDetailsService } from './task-details.service';
import { TasksGuardService } from './tasks-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskDetailsComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [TaskDetailsService, TasksGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

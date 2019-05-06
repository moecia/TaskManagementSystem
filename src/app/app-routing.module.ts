import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component'
import { LoginComponent } from './login/login.component'
import { TasksGuardService } from './tasks-guard.service';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent, canActivate: [TasksGuardService]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

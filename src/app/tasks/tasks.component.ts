import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from '../task-details.service'
import { Task } from '../task'
import { UserService } from '../user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  task;
  taskToAdd;

  constructor(private taskDetailsService: TaskDetailsService,
    private userService : UserService) { }

  ngOnInit() {
    this.getTasks();
    this.task = new Task();
    this.taskToAdd = new Task();
  }

  getTasks(): void {  
    this.taskDetailsService.getTasks()
    .subscribe((data) => { this.tasks = data; });
  }

  getTask(id: number): void {
    this.taskDetailsService.getTask(id)
    .subscribe((data) => { this.task = data; });
  }

  addTask(): void {
    let task = new Task();
    task.quoteType = this.taskToAdd.QuoteType;
    task.quoteNumber = this.taskToAdd.QuoteNumber;
    task.contactName = this.taskToAdd.ContactName
    task.taskDesc = this.taskToAdd.TaskDesc;
    task.taskType = this.taskToAdd.TaskType;
    task.dueDate = this.taskToAdd.DueDate;
    this.taskDetailsService.addTask(task)
    .subscribe();   
    window.location.reload();
  }

  updateTask(id: number): void {
    let task = new Task();
    task.id = id;
    task.quoteType = this.task.QuoteType; 
    task.quoteNumber = this.task.QuoteNumber;  
    task.contactName = this.task.ContactName;
    task.taskDesc = this.task.TaskDesc;  
    task.taskType = this.task.TaskType; 
    task.dueDate = this.task.DueDate;
    //"2020-06-02T23:23"
    // task.dueDate = '2019-05-02T16:11:00';
    this.taskDetailsService.updateTask(task).
    subscribe();
    window.location.reload();
  }

  deleteTask(id: number): void {
    this.taskDetailsService.deleteTask(id).
    subscribe();
    window.location.reload();
  }
  
  searchTask(term: string): void {

  }

  logout(): void {
    this.userService.userRemoveAuthentication();
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from '../task-details.service'
import { Task } from '../task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  task;
  constructor(private taskDetailsService: TaskDetailsService) { }

  ngOnInit() {
    this.getTasks();
    this.task = new Task();
  }

  getTasks(): void {  
    this.taskDetailsService.getTasks()
    .subscribe((data) => { this.tasks = data; });
  }

  getTask(id: number): void {
    this.taskDetailsService.getTask(id)
    .subscribe((data) => { this.task = data; });
  }

  addTask(addTaskFrom): void {
    let task = new Task();
    task.quoteType = addTaskFrom.value.quoteType;
    task.quoteNumber = addTaskFrom.value.quoteNumber;
    task.contactName = addTaskFrom.value.contactName
    task.taskDesc = addTaskFrom.value.taskDesc;
    task.taskType = addTaskFrom.value.taskType;
    task.dueDate = addTaskFrom.value.dueDate;
    this.taskDetailsService.addTask(task)
    .subscribe();   
    window.location.reload();
  }

  updateTask(editTaskFrom, id: number): void {
    let task = new Task();
    task.id = id;
    task.quoteType = this.task.QuoteType; 
    task.quoteNumber = this.task.QuoteNumber;  
    task.contactName = this.task.ContactName;
    task.taskDesc = this.task.TaskDesc;  
    task.taskType = this.task.TaskType; 
    task.dueDate = this.task.DueDate;
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
}

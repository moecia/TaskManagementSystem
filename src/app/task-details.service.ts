import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskDetailsService {

  private tasksUrl = 'http://localhost:50918/api/TaskDetails'

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.tasksUrl);
  }

  getTask(id: number) {
    return this.http.get(this.tasksUrl + `/${id}`);
  }

  addTask(task: Task) {
    let body = `{
      "QuoteType" : "${task.quoteType}",
      "QuoteNumber" : "${task.quoteNumber}",
      "ContactName" : "${task.contactName}",
      "TaskDesc" : "${task.taskDesc}",
      "TaskType" : "${task.taskType}"
    }`;
    return this.http.post(this.tasksUrl, body, httpOptions);
  }

  updateTask(task: Task) {
    let body = `{
      "TaskId" : "${task.id}",
      "DueDate" : "${task.dueDate}",
      "QuoteType" : "${task.quoteType}",
      "QuoteNumber" : "${task.quoteNumber}",
      "ContactName" : "${task.contactName}",
      "TaskDesc" : "${task.taskDesc}",
      "TaskType" : "${task.taskType}"
    }`;
    return this.http.put(this.tasksUrl + `/${task.id}`, body, httpOptions);
  }

  deleteTask(id: Number) {
    return this.http.delete(this.tasksUrl + `/${id}`);
  }
}

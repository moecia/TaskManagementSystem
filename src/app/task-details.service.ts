import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('userToken')}`})
// };

@Injectable({
  providedIn: 'root'
})
export class TaskDetailsService {

  private tasksUrl = 'http://localhost:50918/api/TaskDetails';

  constructor(private http: HttpClient) { }

  getTasks() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('userToken')}` })
    };//TODO:HTTPinterceptor
    return this.http.get(this.tasksUrl, httpOptions);
  }

  getTask(id: number) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('userToken')}` })
    };
    return this.http.get(this.tasksUrl + `/${id}`, httpOptions);
  }

  addTask(task: Task) {
    let body = `{
      "QuoteType" : "${task.quoteType}",
      "QuoteNumber" : "${task.quoteNumber}",
      "ContactName" : "${task.contactName}",
      "TaskDesc" : "${task.taskDesc}",
      "TaskType" : "${task.taskType}",
      "DueDate" : "${task.dueDate}"
    }`;
    debugger;
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('userToken')}` })
    };
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
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('userToken')}` })
    };
    return this.http.put(this.tasksUrl + `/${task.id}`, body, httpOptions);
  }

  deleteTask(id: Number) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('userToken')}` })
    };
    return this.http.delete(this.tasksUrl + `/${id}`, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.interface';

@Injectable({
    providedIn: 'root'
  })

export class TaskService {
private apiUrl = 'http://localhost:3000/tasks';  // URL to JSON server
constructor(private http:HttpClient){}
addtask(task:Task[]):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task);
    }
}  // Add task service for to-do logic

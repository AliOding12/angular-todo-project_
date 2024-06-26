import { Component,input,Input,Output,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { Tasks } from '../to-do/testtask';
import { Task } from './task.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskService } from '../to-do/task.service';
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [RouterOutlet,ItemsComponent,CommonModule,FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
private apiUrl = 'http://localhost:3000/Tasks';
constructor(private http:HttpClient,private taskService: TaskService){}
task1:Task[] = []
taskData : Task[] = Tasks;
//parentData : string = 'transfer successfull';
Onclick(task:Task[]){
this.taskService.addtask(task).subscribe(
  (newTask)=>{
    this.task1.push(newTask);
  }
)
}
} // Add to-do component and template

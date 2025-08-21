import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit{

 constructor(){}
 //@Input() 'task':Task;
@Input() 'data':Task[];
 ngOnInit():void{}
}

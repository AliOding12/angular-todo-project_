import { Component, NgModule,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ToDoComponent } from './todo/to-do/to-do.component';
import { ToDoComponent } from './todo/to-do/to-do.component';
import { ItemsComponent } from './todo/to-do/items/items.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToDoComponent,ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'ang01';

}

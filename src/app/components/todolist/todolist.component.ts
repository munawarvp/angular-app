import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TodolistComponent {
  @Input('todoList')todoList?: string[];

  deleteTodoList(i:number) {
    this.todoList?.splice(i, 1)
    
  }
}

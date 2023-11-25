import { FormGroup, FormControl } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @ViewChild('todoInputRef', {read:ElementRef})todoInputRef?:ElementRef;
  todoList: string[] = []
  formDatatodo = new FormGroup({
    todoInput: new FormControl('')
  })

  addTodolist() {
    const todoInputValue = this.formDatatodo?.get('todoInput')?.value;
    (this.todoInputRef?.nativeElement as HTMLInputElement).value = ''
    // this.formDatatodo.patchValue({
    //   todoInput:''
    // });
    if (todoInputValue) this.todoList.push(todoInputValue)
  }
}

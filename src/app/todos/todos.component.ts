import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../Pages/models';
import { MasterService } from '../Service/master.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

 
  mService =inject(MasterService);
  todos: Todo[] = [];
  //filteredTodos: Todo[] = [];


  constructor(){

  }

  ngOnInit(): void {
    this.loadAllTask();
  }

  todoForm: FormGroup = new FormGroup({
    text:  new FormControl('', [Validators.required, Validators.maxLength(200)])
  });

  addTodo(): void {
    if (this.todoForm.valid) {
      this.mService.addTodo(this.todoForm.value.text);
      this.todoForm.reset();
    }
  }

  loadAllTask(){
    this.mService.getTodos().subscribe(todos => {
      this.todos = todos;
     
    });
  }
  deleteTodo(id: number): void {
    this.mService.deleteTodo(id);
  }
  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
    this.mService.updateTodo(todo);
  }
}

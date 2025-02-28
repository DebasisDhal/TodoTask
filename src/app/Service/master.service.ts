import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { Todo } from '../Pages/models';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable().pipe(delay(1000));
  }

  addTodo(text: string): void {
    if (this.todos.some(todo => todo.text === text)) {
      alert('This todo already exists');
      return;
    }
    const newTodo: Todo = { id: Date.now(), text, completed: false, createdAt: new Date() };
    this.todos.push(newTodo);
    this.todosSubject.next([...this.todos]);
  }

  deleteTodo(id: number): void {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.todosSubject.next([...this.todos]);
    }
  }
  updateTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      this.todosSubject.next([...this.todos]);
    }
  }
}

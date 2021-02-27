import { trigger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '001',
        title: 'Learn Angular JS ',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '002',
        title: 'Learn Node JS ',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '003',
        title: 'Learn Typescript JS ',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '004',
        title: 'Learn JS ',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '005',
        title: 'Learn Git ',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '006',
        title: 'Learn Babel JS ',
        isCompleted: true,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentobj) => currentobj.id == todo.id
    );
    this.todos.splice(indexofTodo, 1);
  }
}

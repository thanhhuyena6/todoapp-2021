import { Component, OnInit } from '@angular/core';
import {Todo} from "../../interfaces/todo";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),

    ])
  ]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle: string = '';
  idForTodo: number = 0;
  beforeEditCache: string = '';
  filter: string = '';
  date: Date;

  constructor() { }

  ngOnInit(): void {
    this.beforeEditCache = '';
    this.todoTitle = '';
    this.idForTodo = 0;
    this.filter = 'all';
    this.date = new Date();
    this.date.setDate(this.date.getDate());
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return
    }

    this.todos.push ({
      id : this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false,
      date : new Date(),
    })
    this.todoTitle = '';
    this.idForTodo++;
  }


  deleteTodo(id : number): void {
    this.todos = this.todos.filter (todo => todo.id !== id )
  }


  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos;
  }


}



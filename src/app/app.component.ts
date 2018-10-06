import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todos: Todo[] = [];
  public newTodo: string;


  ngOnInit() {
    this.todos.push({ name: 'Faire une super présentation', check: true });
    this.todos.push({ name: 'Comparer JIT vs AOT', check: true });
    this.todos.push({ name: 'Parler des features modules', check: true });
    this.todos.push({ name: 'Comparer les stratégies de detection du changement', check: true });
    this.todos.push({ name: 'Présenter server-side rendering', check: false });
  }

  addTodo() {
    this.todos.push({ name: this.newTodo, check: false });
    this.newTodo = '';
  }

}

export interface Todo {
  name: string;
  check: boolean;
}

import { Component, Input } from '@angular/core';

import { Task } from './todo-app/shared/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  @Input() all: boolean;
  @Input() active: boolean;
  @Input() completed: boolean;
  todoArr: Task[];

  constructor() {
    this.all = true;
    this.completed = false;
    this.active = false;

    this.todoArr = [];
    this.todoArr = this.getLocalStorage();
  }

  showAll(value: any): void {
    this.active = false;
    this.completed = false;
    this.all = true;
  }

  showActive(value: any): void {
    this.active = true;
    this.completed = false;
    this.all = false;
  }

  showCompleted(value: any): void {
    this.active = false;
    this.completed = true;
    this.all = false;
  }

  update(value: Task[]): void {
    this.todoArr = [];
    this.todoArr = value;
    this.localStorage(value);
  }

  localStorage(value: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(value));
  }

  getLocalStorage(): Task[] {
    let data = JSON.parse(localStorage.getItem('tasks') || '[]');

    if (data == null) {
      data = [];
    }

    return data;
  }
}

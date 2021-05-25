import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {
  @Output() todoArrEvent: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  @Input() todoArr: Task[] = [];
  todo = '';

  addTask(): void {
    if (this.todo !== '') {
      this.todoArr.push({todo: this.todo, completed: false});
      this.todoArrEvent.emit(this.todoArr);
    }
  }

  taskCompleted(i: number): void {
    if (this.todoArr[i].completed === true) {
      this.todoArr[i].completed = false;
      this.todoArrEvent.emit(this.todoArr);
    } else {
      this.todoArr[i].completed = true;
      this.todoArrEvent.emit(this.todoArr);
    }
  }
}

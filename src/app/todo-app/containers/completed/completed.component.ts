import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  @Output() todoArrCompleted: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  @Input() todoArr: Task[] = [];

  remove(index: number): void {
    delete this.todoArr[index];

    const filtered = this.todoArr.filter(elem => elem !== null);
    this.todoArr = filtered;

    this.todoArrCompleted.emit(this.todoArr);
  }

  removeAll(): void {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].completed) {
        delete this.todoArr[i];
      }
    }
    const filtered = this.todoArr.filter(elem => elem !== null);
    this.todoArr = filtered;
    this.todoArrCompleted.emit(this.todoArr);
  }
}

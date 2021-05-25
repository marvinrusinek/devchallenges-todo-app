import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  @Output() eventEmitterAll: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() eventEmitterActive: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() eventEmitterCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  all: boolean;
  active: boolean;
  completed: boolean;

  constructor() {
    this.all = true;
    this.completed = false;
    this.active = false;
  }

  emitAll(): void {
    this.all = !this.all;
    this.eventEmitterAll.emit(this.all);
  }

  emitActive(): void {
    this.active = !this.active;
    this.eventEmitterActive.emit(this.active);
  }

  emitCompleted(): void {
    this.completed = !this.completed;
    this.eventEmitterCompleted.emit(this.completed);
  }
}

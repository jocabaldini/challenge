import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  private update(task: Task): void {
    this.tasksService.updateTask(task)
      .subscribe();
  }

  complete(): void {
    if (this.task) {
      this.task.done = 1;
      this.update(this.task)
    }
  }

  reprove(): void {
    if (this.task) {
      this.task.done = 0;
      this.task.undoCount++;
      this.update(this.task)
    }
  }
}

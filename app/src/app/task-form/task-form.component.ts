import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    id: 0,
    description: '',
    owner: '',
    mail: '',
    done: 0,
    undoCount: 0
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  createTask(): void {
    this.tasksService.createTask(this.task)
      .subscribe();
  }

}

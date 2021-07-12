import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  titlePendentList = 'Pendentes';
  pendentTasks: Task[] = [];
  titleDoneList = 'Finalizados';
  doneTasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    const PENDENT = 0;
    const DONE = 1;
    this.tasksService.getTasks()
      .subscribe(tasks => {
        this.pendentTasks = tasks.filter(task => task.done === PENDENT)
        this.doneTasks = tasks.filter(task => task.done === DONE)
      });
  }
}

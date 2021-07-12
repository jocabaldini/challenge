import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  titlePendentList = 'Pendentes';
  titleDoneList = 'Finalizados';

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}

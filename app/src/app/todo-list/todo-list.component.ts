import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() title = '';
  @Input() tasks: Task[] = []

  constructor() { }

  ngOnInit(): void {}
}

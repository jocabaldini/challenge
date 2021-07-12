import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MessagesComponent } from './messages/messages.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    TodoListComponent,
    TaskComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

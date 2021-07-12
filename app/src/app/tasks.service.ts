import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private tasksUrl = 'http://127.0.0.1:3051/api/v1/tasks';

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(_ => this.log('fetched tasks')),
        catchError(this.handleError<Task[]>('getTasks', []))
      );

    return tasks;
  }

  createTask(task: Task): Observable<Task> {
    const tasks = this.http.post<Task>(this.tasksUrl, task)
      .pipe(
        tap(_ => this.log('fetched tasks')),
        catchError(this.handleError<Task>('createTask', task))
      );

    return tasks;
  }

  updateTask(task: Task): Observable<Task> {
    const tasks = this.http.put<Task>(this.tasksUrl, task)
      .pipe(
        tap(_ => this.log('fetched tasks')),
        catchError(this.handleError<Task>('updateTask', task))
      );

    return tasks;
  }

 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

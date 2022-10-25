import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  private taskUrl = "/api"

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl)
    .pipe(
      tap(_ => console.log('fetched Tasks')),
      catchError(this.handleError<Task[]>('getTasks',[])
      )
    );
  }






  constructor(
    private http: HttpClient
  ) { }
}

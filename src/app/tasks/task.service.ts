import { Injectable } from "@angular/core";
import { NewTask, Task } from "./task";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, catchError, tap, map, throwError} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class TaskService{
    private taskUrl = 'http://localhost:8080/api/tasks';

    constructor(private http: HttpClient){}

    getTasks(): Observable<Task[]>{
       return this.http.get<Task[]>(this.taskUrl).pipe(
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
       );
    }

    saveTask(task: NewTask): Observable<Task>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post<Task>(this.taskUrl, task, {headers})
        .pipe(
            tap(data => console.log('created task: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    updateTask(task: Task): Observable<Task>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const url = `${this.taskUrl}/${task.id}`;
        return this.http.put<Task>(url, task, {headers})
        .pipe(
            tap(() => console.log('updated task: ' + task.id)),
            map(() => task),
            catchError(this.handleError)
        );
    }

    deleteTask(id: number): Observable<{}>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const url = `${this.taskUrl}/${id}`;
        return this.http.delete<Task>(url, {headers})
        .pipe(
            tap(data => console.log('deleted Task: ' + id)),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = ' ';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        }else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
        }
        console.log(errorMessage);
        return throwError(() => errorMessage);
    }


}
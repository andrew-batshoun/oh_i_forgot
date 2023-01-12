import { Injectable } from "@angular/core";
import { Task } from "./task";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, catchError, tap, throwError} from 'rxjs';


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
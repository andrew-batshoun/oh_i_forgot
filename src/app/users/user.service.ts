import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn:'root'
})

export class UserService{
    private userUrl = 'http://localhost:8080/api/auth/';
    redirectUrl = '';

    get isLoggedIn():boolean{
        return !!sessionStorage.getItem('user');
    }

    constructor(private http: HttpClient){}

    registerUser(user: User): Observable<User>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post<User>(this.userUrl + "signup", user, {headers, withCredentials: true})
        .pipe(
            tap(data => console.log('Created user: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
        
    }

    loginUser(user:User): Observable<User>{
        return this.http.post<User>(this.userUrl + "login", {
            username: user.username,
            password: user.password
        }, {withCredentials: true}).pipe(
            tap(data => sessionStorage.setItem('user', JSON.stringify(data.username))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = ' ';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        }else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}` 
        }
        console.log(errorMessage);
        return throwError(() => errorMessage);
    }

    logout(): void{
        sessionStorage.removeItem('user'); 
    }




}
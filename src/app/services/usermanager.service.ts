import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/User';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {

  constructor(private http: HttpClient) { }
  private url = 'api/users';

  // Log function for Console
  private log(log: string) {
    console.info(log);
  }

  // Handle Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //Return all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap(_ => this.log('fetched user')),
      catchError(this.handleError('get Contacts', []))
    );

  }
  getUserById(id:number): Observable<User> {
    const url = `${this.url}/${id}`;
    
    return this.http.get<User>(url).pipe(
      tap(_ => this.log('fetched user')),
      catchError(this.handleError('get Contacts', new User(0,'','','','',new Date(),'')))
    );
  }
  
  // Delete user
  deleteUser(user: User): Observable<User> {
    const url = `${this.url}/${user.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log(`delete user id= ${user.id}`)),
      catchError((this.handleError<any>('Delete user')))
    );
  }

  // Add user
  addUser(user: User): Observable<User> {
    const url = `${this.url}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.post<User>(url, user, httpOptions).pipe(
      tap(_ => this.log(`ajouter user id= ${user.id}`)),
      catchError((this.handleError<any>('ajouter user')))
    );
  }

  
}
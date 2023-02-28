// @angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//rxjs
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// data models
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  // variables
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // constructor
  constructor(private http: HttpClient) {}

  // functions
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.usersUrl}/${id}`)
      .pipe(catchError(this.handleError<User>(`getHero id=${id}`)));
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(this.usersUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateUser')));
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http
      .delete<User>(url)
      .pipe(catchError(this.handleError<User>('deleteUser')));
  }

  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(catchError(this.handleError<User[]>('searchHeroes', [])));
    // return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
} //class End

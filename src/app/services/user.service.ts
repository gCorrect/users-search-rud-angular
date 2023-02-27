// @angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// rxjs
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// data
// import { User } from '../../../data/user';
import { User } from '../models/user.model';

// import { Users } from '../../data/mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  // private usersUrl = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // const users = of(Users);
    // return users;
    return this.http.get<User[]>(this.usersUrl);
    // .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  /** GET hero by id. Will 404 if id not found */
  // getUser(id: number): Observable<User> {
  //   const url = `${this.usersUrl}/${id}`;
  //   return this.http
  //     .get<User>(url)
  //     .pipe(catchError(this.handleError<User>(`getHero id=${id}`)));
  // }

  // getUser(id: number): Observable<User> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const user = Users.find((h) => h.id === id)!;
  //   return of(user);
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    return this.http
      .put(this.usersUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateUser')));
  }

  /** DELETE: delete the user from the server */
  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http
      .delete<User>(url, this.httpOptions)
      .pipe(catchError(this.handleError<User>('deleteUser')));
  }

  /* GET heroes whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http
      .get<User[]>(`${this.usersUrl}/?name=${term}`)
      .pipe(catchError(this.handleError<User[]>('searchHeroes', [])));
  }
}

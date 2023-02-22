import { Injectable } from '@angular/core';
import { User } from '../../data/user';
import { Users } from '../../data/mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    const users = of(Users);
    return users;
  }

  getUser(id: number): Observable<User> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const user = Users.find((h) => h.id === id)!;
    return of(user);
  }

  constructor() {}
}

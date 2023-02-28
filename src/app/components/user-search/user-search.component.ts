// @angular
import { Component, OnInit } from '@angular/core';
// rxjs
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// data models
import { User } from '../../models/user.model';
// services
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  users: User[] = [];
  matchedUsers: User[] = [];

  constructor(private usersService: UsersService) {}

  searchUsers(term: string): void {
    this.usersService
      .searchUsers(term)
      .subscribe((users) => (this.users = users.slice(0, 7)));

    this.users.forEach((user) => {
      // when input is empty delete matchedUsers array content
      if (term.length < 2) {
        this.matchedUsers = [];
      } else {
        // when input is not empty or term.length > 1
        for (let i = 0; i < user.name.length; i++) {
          // loop through user name characters to find matches
          if (user.name.substring(0, i + 1) === term) {
            // if user name starts with term
            if (
              // current user is not in matchedUsers array yet then push it
              this.matchedUsers.find(
                (searched) => searched.name === user.name
              ) == null
            ) {
              this.matchedUsers.push(user);
            }
          }
        }
      }
    });
  }

  ngOnInit(): void {}
} // class end

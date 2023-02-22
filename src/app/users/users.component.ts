import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
// data
import { User } from 'data/user';
import { Users } from 'data/mock-users';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  threeDots = faEllipsisV;
  clicked: boolean = false;
  users: User[] = [];

  selectedUser!: User;
  selectedLi!: number;

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((users) => (this.users = users.slice(0, 7)));
  }

  onSelect(user: User, li_id: number): void {
    this.selectedUser = user;
    this.selectedLi = li_id;
    this.clicked = true;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
}

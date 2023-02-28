import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// Services
import { UsersService } from '../../services/users.service';
// data
// import { User } from 'data/user';
import { User } from '../../models/user.model';
// import { Users } from 'data/mock-users';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  // variables
  @Input() matchedUsers: User[] = [];
  users: User[] = [];

  threeDots = faEllipsisV;
  delBtnPressed: boolean = false;

  selectedUser!: User;
  selectedLi!: number;

  // functions
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService
      .getUsers()
      .subscribe((users) => (this.users = users.slice(0, 7)));
  }

  deletePressed(): void {
    this.delBtnPressed = true;
  }

  delete(user: User): void {
    this.delBtnPressed = false;

    // delete user in database and update users array
    this.usersService.deleteUser(user.id).subscribe((response) => {
      this.users = this.users.filter(
        (usersToRemain) => usersToRemain.id !== user.id
      );
    });

    // unselect users
    this.onUnSelect();
  }

  onSelect(user: User, li_id: number): void {
    this.delBtnPressed = false;

    this.selectedUser = user;
    this.selectedLi = li_id;
  }

  onUnSelect(): void {
    this.selectedLi = -1;
  }
}

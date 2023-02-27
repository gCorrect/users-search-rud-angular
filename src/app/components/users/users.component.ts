import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// Services
import { UsersService } from '../../services/users.service';
import { MessageService } from 'src/app/services/message.service';
// data
// import { User } from 'data/user';
import { User } from '../../models/user.model';
// import { Users } from 'data/mock-users';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  threeDots = faEllipsisV;
  clicked: boolean = false;
  users: User[] = [];
  delBtnPressed: boolean = false;

  selectedUser!: User;
  selectedLi!: number;

  constructor(
    private usersService: UsersService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService
      .getUsers()
      .subscribe((users) => (this.users = users.slice(0, 7)));
  }

  deleteCheck(): void {
    this.delBtnPressed = true;
    // alert('Are you sure you want to delete this user?');
  }
  delete(user: User): void {
    // this.messageService.add(
    //   `{Are you sure you want to delete user ${user.username}?`
    // );
    // this.users = this.users.filter((u) => u !== user);
    this.delBtnPressed = false;
    this.usersService.deleteUser(user.id).subscribe((response) => {
      this.users = this.users.filter(
        (usersToRemain) => usersToRemain.id !== user.id
      );
    });
    this.onUnSelect();
  }
  deleteCancel(): void {
    this.delBtnPressed = false;
  }

  onSelect(user: User, li_id: number): void {
    this.delBtnPressed = false;
    this.selectedUser = user;
    this.selectedLi = li_id;
    this.clicked = true;
  }
  onUnSelect(): void {
    this.selectedLi = -1;
  }
}

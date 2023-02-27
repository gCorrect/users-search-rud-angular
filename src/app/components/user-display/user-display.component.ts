import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Model
import { User } from '../../models/user.model';

// Service
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
})
export class UserDisplayComponent implements OnInit {
  users?: User[];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      // this.setUserName();
    });
    console.log(this.users);
  }

  // setUserName() {
  //   if (this.users && this.users) {
  //     for (const user of this.users) {
  //       if (user.id) {
  //         user.name = user.name;
  //       }
  //     }
  //   }
  // }

  ngOnInit(): void {}
}

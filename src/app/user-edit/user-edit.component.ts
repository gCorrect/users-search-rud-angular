import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faX } from '@fortawesome/free-solid-svg-icons';
// data
import { User } from 'data/user';
import { UserService } from '../user.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  // @Input() id?: number;
  user: User | undefined;
  xIcon = faX;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }

  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}

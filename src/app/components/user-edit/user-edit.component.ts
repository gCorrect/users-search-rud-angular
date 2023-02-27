import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faX } from '@fortawesome/free-solid-svg-icons';
// data
// import { User } from 'data/user';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  // @Input() id?: number;
  user: User | undefined;
  xIcon = faX;
  isEmptyField: boolean = false;

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

  emptyFieldCheck(input: String) {
    const saveBtn = document.getElementById('save');
    let alertBox = document.getElementById('empty-field-alert');

    // check if all fields are filled
    if (
      input.trim() === '' ||
      this.user?.username.trim() === '' ||
      this.user?.name.trim() === '' ||
      this.user?.email.trim() === '' ||
      this.user?.company.name.trim() === ''
    ) {
      this.isEmptyField = true;
      if (saveBtn !== null) {
        saveBtn.style.cursor = 'not-allowed';
        saveBtn?.setAttribute('disabled', 'true');
        saveBtn.style.backgroundColor = 'rgb(90, 90, 222)';
        // saveBtn.addEventListener(
        //   'mouseover',
        //   () => {
        //     console.log('not allowed hover');
        //     saveBtn.style.backgroundColor = 'red';
        //     const formButtons = document.querySelector('.form-buttons');
        //     const alertBox = document.createElement('div');
        //     alertBox.classList.add('alert-box');
        //     alertBox.innerHTML = 'No empty fields allowed!';
        //     formButtons?.appendChild(alertBox);
        //   },
        //   false
        // );
      }

      return;
    } else {
      this.isEmptyField = false;
      if (saveBtn !== null) {
        saveBtn.style.cursor = 'pointer';
        saveBtn?.removeAttribute('disabled');
        saveBtn.style.backgroundColor = 'blue';
      }

      return;
    }
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

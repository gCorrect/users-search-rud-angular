import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'three-dots-menu',
  templateUrl: './three-dots-menu.component.html',
  styleUrls: ['./three-dots-menu.component.scss'],
})
export class ThreeDotsMenuComponent implements OnInit {
  @Input() user?: any;

  filmIcon = faEllipsisV;

  constructor() {}

  ngOnInit(): void {}
}

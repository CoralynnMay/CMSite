import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.scss'],
})
export class CardBackComponent implements OnInit {
  @HostBinding('class.card--back') true;

  constructor() {}

  ngOnInit(): void {}
}

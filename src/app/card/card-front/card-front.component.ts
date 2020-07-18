import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.scss'],
})
export class CardFrontComponent implements OnInit {
  @HostBinding('class.card--front') true;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @HostBinding('class.card--flipped') isFlipped = false;

  constructor() {}

  ngOnInit(): void {}

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}

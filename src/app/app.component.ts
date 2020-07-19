import { Component, HostListener, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CoralynnMay';

  @HostBinding('class.trianglevisible') isTriangleVisible: boolean;
  @HostListener('window:scroll', [])
  public setTriangleVisible(): void {
    this.isTriangleVisible = 10 > document.documentElement.scrollTop;
  }

  ngOnInit(): void {}
}

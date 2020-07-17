import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appButtonStyle]',
})
export class ButtonStyleDirective implements AfterViewInit, OnChanges {
  @Input() appButtonStyle: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.appButtonStyle);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.removeClass(
      this.el.nativeElement,
      changes.appButtonStyle.previousValue
    );
    this.renderer.addClass(
      this.el.nativeElement,
      changes.appButtonStyle.currentValue
    );
  }
}

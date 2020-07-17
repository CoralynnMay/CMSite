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

export enum AppButtonStyles {
  primary = 'primary',
  secondary = 'secondary',
}

@Directive({
  selector: '[appButtonStyle]',
})
export class ButtonStyleDirective implements AfterViewInit, OnChanges {
  @Input() appButtonStyle: AppButtonStyles;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.appButtonStyle);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appButtonStyle) {
      this.renderer.removeClass(
        this.el.nativeElement,
        `btn-${changes.appButtonStyle.previousValue}`
      );
      this.renderer.addClass(
        this.el.nativeElement,
        `btn-${changes.appButtonStyle.currentValue}`
      );
    }
  }
}

import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
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
export class ButtonStyleDirective implements OnChanges {
  @Input() appButtonStyle: AppButtonStyles;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appButtonStyle.isFirstChange()) {
      this.renderer.addClass(
        this.el.nativeElement,
        `btn-${changes.appButtonStyle.currentValue}`
      );
    } else if (changes.appButtonStyle) {
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

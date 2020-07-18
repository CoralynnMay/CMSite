import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
} from '@angular/core';

export enum AppButtonVariants {
  flat = 'flat',
  outline = 'outline',
}

@Directive({
  selector: '[appButtonVariant]',
})
export class ButtonVariantDirective implements OnChanges {
  @Input() appButtonVariant: AppButtonVariants;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appButtonVariant.isFirstChange()) {
      this.renderer.addClass(
        this.el.nativeElement,
        `btn-${changes.appButtonVariant.currentValue}`
      );
    } else if (changes.appButtonVariant) {
      this.renderer.removeClass(
        this.el.nativeElement,
        `btn-${changes.appButtonVariant.previousValue}`
      );
      this.renderer.addClass(
        this.el.nativeElement,
        `btn-${changes.appButtonVariant.currentValue}`
      );
    }
  }
}

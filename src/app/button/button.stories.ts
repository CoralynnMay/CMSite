import { ButtonComponent } from './button.component';
import {
  ButtonStyleDirective,
  AppButtonStyles,
} from './button-style.directive';
import {
  ButtonVariantDirective,
  AppButtonVariants,
} from './button-variant.directive';
import { moduleMetadata } from '@storybook/angular';
import { select, withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [
    (story) => ({
      ...story(),
      template: `<div class="storybook-container">${story().template}</div>`,
    }),
    withKnobs,
    moduleMetadata({
      declarations: [
        ButtonComponent,
        ButtonStyleDirective,
        ButtonVariantDirective,
      ],
    }),
  ],
};

export const regular = () => ({
  component: ButtonComponent,
  props: {
    appButtonStyle: select(
      'Button Style',
      AppButtonStyles,
      AppButtonStyles.primary
    ),
    appButtonVariant: select(
      'Button Variant',
      AppButtonVariants,
      AppButtonVariants.flat
    ),
    text: text('Text', 'Button'),
  },
  template: `<app-button [appButtonStyle]="appButtonStyle" [appButtonVariant]="appButtonVariant">{{text}}</app-button>`,
});

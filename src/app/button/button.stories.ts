import { ButtonComponent } from './button.component';
import { ButtonStyleDirective } from '../button-style.directive';
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
      declarations: [ButtonComponent, ButtonStyleDirective],
    }),
  ],
};

const appButtonStyleOptions = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

export const regular = () => ({
  component: ButtonComponent,
  props: {
    appButtonStyle: select(
      'Button Style',
      appButtonStyleOptions,
      'btn-primary'
    ),
    text: text('Text', 'Button'),
  },
  template: `<app-button appButtonStyle="{{appButtonStyle}}">{{text}}</app-button>`,
});

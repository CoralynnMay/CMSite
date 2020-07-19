import { NavButtonComponent } from './nav-button.component';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [
    (story) => ({
      ...story(),
      template: `<div class="storybook-container">${story().template}</div>`,
    }),
    withKnobs,
    moduleMetadata({
      declarations: [NavButtonComponent],
    }),
  ],
};

export const navButton = () => ({
  component: NavButtonComponent,
  props: {
    text: text('Text', 'Nav Button'),
  },
  template: `<app-nav-button [text]="text"></app-nav-button>`,
});

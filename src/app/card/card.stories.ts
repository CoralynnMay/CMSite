import { CardComponent } from './card.component';
import { CardFrontComponent } from './card-front/card-front.component';
import { CardBackComponent } from './card-back/card-back.component';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Card',
  decorators: [
    (story) => ({
      template: `<div class="storybook-container">${story().template}</div>`,
    }),
    withKnobs,
    moduleMetadata({
      declarations: [CardComponent, CardFrontComponent, CardBackComponent],
    }),
  ],
};

export const card = () => ({
  component: CardComponent,
  props: {},
  template: `<app-card style="width: 30rem; height: 50rem;">
      <app-card-front>
        <div style="width: 100%; height: 100%; background-color: white;">
          Front
        </div>
      </app-card-front>
      <app-card-back>
        <div style="width: 100%; height: 100%; background-color: steelblue;">Back</div>
      </app-card-back>
    </app-card>`,
});

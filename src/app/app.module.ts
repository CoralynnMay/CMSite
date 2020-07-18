import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonStyleDirective } from './button/button-style.directive';
import { ButtonVariantDirective } from './button/button-variant.directive';
import { CardComponent } from './card/card.component';
import { CardFrontComponent } from './card/card-front/card-front.component';
import { CardBackComponent } from './card/card-back/card-back.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonStyleDirective,
    ButtonVariantDirective,
    CardComponent,
    CardFrontComponent,
    CardBackComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

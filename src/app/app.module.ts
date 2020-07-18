import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonStyleDirective } from './button/button-style.directive';
import { ButtonVariantDirective } from './button/button-variant.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonStyleDirective,
    ButtonVariantDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

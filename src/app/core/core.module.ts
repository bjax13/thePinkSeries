import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DiscountBarComponent } from './header/discount-bar/discount-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    DiscountBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]

})
export class CoreModule { }

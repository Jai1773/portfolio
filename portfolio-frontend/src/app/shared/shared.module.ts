import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { ContentCarouselComponent } from './content-carousel/content-carousel.component';
import { MobileBottomNavComponent } from './mobile-bottom-nav/mobile-bottom-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  imports: [
    CommonModule,
    CardComponent,
    CarouselComponent,
    ButtonComponent,
    ModalComponent,
    NavbarComponent,
    MobileBottomNavComponent,
    ContentCardComponent,
    ContentCarouselComponent,
  ],
  exports: [
    CardComponent,
    CarouselComponent,
    ButtonComponent,
    ModalComponent,
    NavbarComponent,
    MobileBottomNavComponent,
    ContentCardComponent,
    ContentCarouselComponent,
  ],
})
export class SharedModule {}

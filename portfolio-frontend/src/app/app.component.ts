import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MobileBottomNavComponent } from './shared/mobile-bottom-nav/mobile-bottom-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MobileBottomNavComponent],
})
export class AppComponent {
  title = 'anispeaker';
}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  /** Navigation items for desktop and mobile */
  navItems = [
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Services', section: 'services' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' },
  ];

  /** Whether the page has been scrolled beyond the threshold */
  scrolled = false;

  /** Mobile menu open state */
  isMenuOpen = false;

  /** Toggle the mobile menu */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** Close the mobile menu (used when a link is clicked) */
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  /** Listen to window scroll events to toggle the .scrolled class */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const threshold = 20; // px after which the navbar changes style
    this.scrolled = window.pageYOffset > threshold;
  }
}

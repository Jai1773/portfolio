import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseParallax]',
  standalone: true,
})
export class MouseParallaxDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5; // -0.5…0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    // Scale to a few degrees of rotation
    const rotateX = y * 6; // max +/-3deg
    const rotateY = x * 6;
    this.el.nativeElement.style.setProperty('--parallax-rotate-x', `${rotateX}deg`);
    this.el.nativeElement.style.setProperty('--parallax-rotate-y', `${rotateY}deg`);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.removeProperty('--parallax-rotate-x');
    this.el.nativeElement.style.removeProperty('--parallax-rotate-y');
  }
}

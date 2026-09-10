import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver;
  private lastScrollY = 0;
  private lastScrollTime = Date.now();

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      root: null,
      threshold: 0.1,
    });
  }

  ngAfterViewInit(): void {
    this.observer.observe(this.el.nativeElement);
    // Listen to scroll events to adjust reveal speed
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
    window.removeEventListener('scroll', this.onScroll);
  }

  private handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.el.nativeElement.classList.add('in-view');
      } else {
        this.el.nativeElement.classList.remove('in-view');
      }
    });
  }

  // Adjust CSS variable based on scroll speed so the transition duration follows the user's scroll pace
  private onScroll = () => {
    const now = Date.now();
    const y = window.scrollY;
    const dy = Math.abs(y - this.lastScrollY);
    const dt = now - this.lastScrollTime;
    if (dt > 0) {
      const speed = dy / dt; // pixels per millisecond
      // Map speed (0 → maxDuration, higher → minDuration)
      const maxSpeed = 0.5; // tweak as needed
      const minDur = 0.2; // seconds (fast scroll)
      const maxDur = 0.8; // seconds (slow scroll)
      const clamped = Math.min(speed, maxSpeed);
      const duration = maxDur - (clamped / maxSpeed) * (maxDur - minDur);
      this.el.nativeElement.style.setProperty('--reveal-duration', `${duration}s`);
    }
    this.lastScrollY = y;
    this.lastScrollTime = now;
  };
}

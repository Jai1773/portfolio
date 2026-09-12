import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CarouselComponent {
  @Input() items: any[] = [];
  @Output() select = new EventEmitter<any>();
  currentIndex = 0;

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  selectItem(item: any): void {
    this.select.emit(item);
  }
}

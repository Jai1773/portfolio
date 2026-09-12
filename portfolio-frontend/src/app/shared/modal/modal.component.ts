import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ModalComponent {
  @Input() title?: string;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.visible = false;
    this.close.emit();
  }
}

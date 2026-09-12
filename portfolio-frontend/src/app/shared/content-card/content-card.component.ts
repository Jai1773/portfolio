import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContentDTO } from '../../models/content.model';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ContentCardComponent {
  @Input() content!: ContentDTO;

  constructor(private readonly router: Router) {}

  onPlay(): void {
    void this.router.navigate(['/player', this.content.id]);
  }
}

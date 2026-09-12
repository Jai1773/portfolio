import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PlayerComponent {
  videoId: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.videoId = this.route.snapshot.paramMap.get('id');
  }
}

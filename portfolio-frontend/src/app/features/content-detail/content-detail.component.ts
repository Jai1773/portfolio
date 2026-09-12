import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ContentDetailComponent {
  contentId: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.contentId = this.route.snapshot.paramMap.get('id');
  }
}

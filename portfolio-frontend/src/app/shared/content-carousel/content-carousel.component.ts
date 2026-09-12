import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDTO } from '../../models/content.model';
import { MockDataService } from '../../core/services/mock-data.service';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-carousel',
  templateUrl: './content-carousel.component.html',
  styleUrls: ['./content-carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
})
export class ContentCarouselComponent implements OnInit {
  @Input() title?: string;
  @Input() type: 'featured' | 'trending' | 'popularAnime' | 'topCartoons' | 'movies' | 'newReleases' = 'featured';
  contents: ContentDTO[] = [];

  constructor(private mockData: MockDataService) {}

  ngOnInit(): void {
    switch (this.type) {
      case 'featured':
        this.mockData.getFeatured().subscribe(data => (this.contents = data));
        break;
      case 'trending':
        this.mockData.getTrending().subscribe(data => (this.contents = data));
        break;
      default:
        this.contents = [];
    }
  }
}

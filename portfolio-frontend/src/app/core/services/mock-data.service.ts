import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentDTO } from '../../models/content.model';

/**
 * Mock data service providing static content for UI demonstration.
 * Replace with real API calls later.
 */
@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private featured: ContentDTO[] = [
    {
      id: '1',
      title: 'Cosmic Quest',
      category: 'Anime',
      description: 'An epic space adventure.',
      videoUrl: '',
    },
    {
      id: '2',
      title: 'Robo Rangers',
      category: 'Cartoon',
      description: 'Heroes in a futuristic world.',
      videoUrl: '',
    },
    // Add more mock items as needed
  ];

  private trending: ContentDTO[] = [
    { id: '3', title: 'Dragon Academy', category: 'Anime', description: '' },
    { id: '4', title: 'Galaxy Heroes', category: 'Cartoon', description: '' },
  ];

  // Additional mock collections (popularAnime, topCartoons, movies, newReleases, genres, etc.)

  getFeatured(): Observable<ContentDTO[]> {
    return of(this.featured);
  }

  getTrending(): Observable<ContentDTO[]> {
    return of(this.trending);
  }

  // Add getters for other sections as needed
}

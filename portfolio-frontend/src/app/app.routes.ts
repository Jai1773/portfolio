import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
// Lazy-loaded feature modules are referenced via loadChildren functions.

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', loadChildren: () => import('./features/browse/browse.module').then(m => m.BrowseModule) },
  { path: 'search', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule) },
  { path: 'content/:id', loadChildren: () => import('./features/content-detail/content-detail.module').then(m => m.ContentDetailModule) },
  { path: 'player/:id', loadChildren: () => import('./features/player/player.module').then(m => m.PlayerModule) },
  { path: 'watch-later', loadChildren: () => import('./features/watch-later/watch-later.module').then(m => m.WatchLaterModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  // wildcard route for 404 - placeholder
  { path: '**', redirectTo: '' },
];

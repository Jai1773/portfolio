import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'content-list', loadChildren: () => import('./content-list/content-list.module').then(m => m.ContentListModule) },
  { path: 'content-editor', loadChildren: () => import('./content-editor/content-editor.module').then(m => m.ContentEditorModule) },
  { path: 'uploads', loadChildren: () => import('./uploads/uploads.module').then(m => m.UploadsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}

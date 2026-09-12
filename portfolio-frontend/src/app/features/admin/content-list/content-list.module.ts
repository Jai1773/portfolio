import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list.component';

const routes: Routes = [{ path: '', component: ContentListComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ContentListComponent
  ],
  exports: [ContentListComponent],
})
export class ContentListModule {}

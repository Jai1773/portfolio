import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadsComponent } from './uploads.component';

const routes: Routes = [{ path: '', component: UploadsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UploadsComponent
  ],
  exports: [UploadsComponent],
})
export class UploadsModule {}

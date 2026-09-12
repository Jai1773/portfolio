import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';

const routes: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PlayerComponent
  ],
  exports: [PlayerComponent],
})
export class PlayerModule {}

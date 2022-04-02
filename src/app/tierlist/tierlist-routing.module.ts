import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TierlistPage } from './tierlist.page';

const routes: Routes = [
  {
    path: '',
    component: TierlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TierlistPageRoutingModule {}

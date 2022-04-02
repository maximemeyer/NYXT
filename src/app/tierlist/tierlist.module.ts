import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TierlistPageRoutingModule } from './tierlist-routing.module';

import { TierlistPage } from './tierlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TierlistPageRoutingModule
  ],
  declarations: [TierlistPage]
})
export class TierlistPageModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsPage } from './components.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ComponentsPageRoutingModule } from './components-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        ComponentsPageRoutingModule
    ],
    declarations: [ComponentsPage]
})
export class ComponentsPageModule { }

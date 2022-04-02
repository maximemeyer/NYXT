import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsPage } from './components.page';

const routes: Routes = [
    {
        path: '',
        component: ComponentsPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsPageRoutingModule { }

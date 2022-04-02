import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'components',
                loadChildren: () => import('../components/components.module').then(m => m.ComponentsPageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/components',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/components',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }

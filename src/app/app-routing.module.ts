import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'connection',
        loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionPageModule)
    },
    {
        path: 'tierlist',
        loadChildren: () => import('./tierlist/tierlist.module').then(m => m.TierlistPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'detail-product',
        loadChildren: () => import('./detail-product/detail-product.module').then(m => m.DetailProductPageModule)
    }

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

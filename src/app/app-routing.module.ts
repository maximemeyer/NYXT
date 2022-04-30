import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./detail-product/detail-product.module').then(m => m.DetailProductPageModule)
    },
    {
        path: 'connection',
        loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionPageModule)
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

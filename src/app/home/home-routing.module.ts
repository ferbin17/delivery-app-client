import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'resturants',
        children: [
          {
            path: '',
            loadChildren: '../resturants/resturants.module#ResturantsPageModule'
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: '../cart/cart.module#CartPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: '../account/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/resturants',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/home/resturants',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

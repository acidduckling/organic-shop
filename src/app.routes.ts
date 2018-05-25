import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './app/shopping-cart/shopping-cart.component';
import { HomeComponent } from './app/home/home.component';

export const appRoutes: Routes = [
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

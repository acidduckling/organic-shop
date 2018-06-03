import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { ProductsComponent } from './shopping/components/products/products.component';

export const appRoutes: Routes = [
  /* Anonymous routes */
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

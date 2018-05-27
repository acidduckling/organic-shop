import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './app/shopping-cart/shopping-cart.component';
import { HomeComponent } from './app/home/home.component';
import { ProductsComponent } from './app/products/products.component';
import { CheckOutComponent } from './app/check-out/check-out.component';
import { OrderSuccessComponent } from './app/order-success/order-success.component';
import { LoginComponent } from './app/login/login.component';
import { AdminProductsComponent } from './app/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './app/admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './app/my-orders/my-orders.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent
  },
  {
    path: 'my/orders',
    component: MyOrdersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

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
import { AuthGuard } from './app/auth.guard';
import { AdminAuthGuard } from './app/admin-auth.guard';
import { ProductFormComponent } from './app/admin/product-form/product-form.component';

export const appRoutes: Routes = [
  /* Anonymous routes */
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  /* Authenticated Routes */
  {
    path: 'check-out',
    component: CheckOutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my/orders',
    component: MyOrdersComponent,
    canActivate: [AuthGuard]
  },
  /* Admin Routes */
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  }
];

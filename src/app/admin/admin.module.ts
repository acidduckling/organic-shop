import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { adminRoutes } from './admin.routes';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(adminRoutes)],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  providers: [AdminAuthGuard]
})
export class AdminModule {}

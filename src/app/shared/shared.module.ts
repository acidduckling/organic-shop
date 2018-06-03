import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderListComponent
  ],
  exports: [ProductCardComponent, ProductQuantityComponent, OrderListComponent],
  providers: [
    AuthService,
    CategoryService,
    ShoppingCartService,
    OrderService,
    ProductService,
    UserService,
    AuthGuard
  ]
})
export class SharedModule {}

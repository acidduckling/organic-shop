import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular5-data-table';
import { CustomFormsModule } from 'ng2-validation';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { EnumToArrayPipe } from 'shared/pipes/enum-to-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    RouterModule.forChild([]),
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderListComponent,
    EnumToArrayPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    ProductCardComponent,
    ProductQuantityComponent,
    OrderListComponent,
    EnumToArrayPipe
  ],
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  category: string;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: any;
  subscription: Subscription;

  constructor(
    productService: ProductService,
    route: ActivatedRoute,
    private cartService: ShoppingCartService
  ) {
    productService
      .getAll()
      .switchMap(products => {
        this.products = products;

        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.products.filter(p => p.category === this.category)
          : this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart()).subscribe(
      cart => (this.cart = cart)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

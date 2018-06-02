import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  shipping: any = {};
  cart: ShoppingCart;

  constructor(
    private cartService: ShoppingCartService,
    private orderService: OrderService
  ) {}

  async ngOnInit() {
    const cart$ = await this.cartService.getCart();
    this.subscription = cart$.subscribe(cart => (this.cart = cart));
  }

  placeOrder() {
    const order = {
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map(i => {
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        };
      })
    };

    this.orderService.storeOrder(order);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

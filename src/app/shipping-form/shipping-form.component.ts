import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input() cart: ShoppingCart;

  userId: string;
  userSubscription: Subscription;
  shipping: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      user => (this.userId = user.uid)
    );
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Order } from 'shared/models/order';

@Injectable()
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private cartService: ShoppingCartService
  ) {}

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.cartService.clearCart();
    return result;
  }

  getAll() {
    return this.db.list('/orders');
  }

  get(orderId: string): Observable<Order> {
    return this.db.object('/orders/' + orderId);
  }

  getOrdersByUser(userId: string): Observable<Order[]> {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    });
  }
}

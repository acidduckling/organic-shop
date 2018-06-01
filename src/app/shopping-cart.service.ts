import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db
      .list('/shopping-carts')
      .push({ dateCreated: new Date().getTime() });
  }

  private getCart(cartId) {
    return this.db.object('/shopping-cart/' + cartId);
  }

  private async getOrCreateCart() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      const result = await this.create();
      localStorage.setItem('cartId', result.key);
      cartId = result.key;
    }
    return this.getCart(cartId);
  }
}

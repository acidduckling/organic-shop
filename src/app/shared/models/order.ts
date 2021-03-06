import { Shipping } from './shipping';
import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[];
  orderPrice: number;

  constructor(
    public userId: string,
    public shipping: Shipping,
    cart: ShoppingCart
  ) {
    this.datePlaced = new Date().getTime();

    this.items = cart.items.map(i => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      };
    });

    this.orderPrice = cart.totalPrice;
  }
}

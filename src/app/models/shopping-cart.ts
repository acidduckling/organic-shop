import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};
    for (const productId in itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId)) {
        const item = itemsMap[productId];

        this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
      }
    }
  }

  get totalItemsCount() {
    let count = 0;
    for (const productId in this.itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId))
        count += this.itemsMap[productId].quantity;
    }
    return count;
  }

  get totalPrice() {
    return this.items
      .map(v => v.totalPrice)
      .reduce((prev = 0, curr) => prev + curr, 0);
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }
}

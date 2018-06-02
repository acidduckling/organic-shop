import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  isNavCollapsed = false;
  appUser: AppUser;
  shoppingCartItemCount: number;
  appUserSubscription: Subscription;
  cartSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private cartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.appUserSubscription = this.auth.appUser$.subscribe(
      appUser => (this.appUser = appUser)
    );

    const cart$ = await this.cartService.getCart();
    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for (const productId in cart.items) {
        if (cart.items.hasOwnProperty(productId))
          this.shoppingCartItemCount += cart.items[productId].quantity;
      }
    });
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.appUserSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}

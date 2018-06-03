import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  isNavCollapsed = false;
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
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

    this.cart$ = await this.cartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.appUserSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}

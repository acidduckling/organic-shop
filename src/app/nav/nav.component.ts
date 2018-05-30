import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {
  isNavCollapsed = false;
  appUser: AppUser;
  appUserSubscription: Subscription;

  constructor(private auth: AuthService) {
    this.appUserSubscription = auth.appUser$.subscribe(
      appUser => (this.appUser = appUser)
    );
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.appUserSubscription.unsubscribe();
  }
}

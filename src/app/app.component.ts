import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  authSubscription: Subscription;

  constructor(private auth: AuthService, router: Router) {
    this.authSubscription = auth.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }

  // unsubscribe not really essential because we only ever have one instance of AppComponent - but implemented for best practices
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}

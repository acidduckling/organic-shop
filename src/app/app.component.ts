import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  authSubscription: Subscription;

  constructor(
    private auth: AuthService,
    router: Router,
    private userService: UserService
  ) {
    this.authSubscription = auth.user$.subscribe(user => {
      if (!user) return;

      userService.save(user);

      const returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }

  // unsubscribe not really essential because we only ever have one instance of AppComponent - but implemented for best practices
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}

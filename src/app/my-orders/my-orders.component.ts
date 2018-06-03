import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$: Observable<Order[]>;

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {
    this.orders$ = authService.user$.switchMap(u =>
      orderService.getOrdersByUser(u.uid)
    );
  }
}

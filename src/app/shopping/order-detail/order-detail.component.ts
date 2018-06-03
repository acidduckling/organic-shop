import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'shared/models/order';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order$: Observable<Order>;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.order$ = orderService.get(id);
  }

  ngOnInit() {}
}

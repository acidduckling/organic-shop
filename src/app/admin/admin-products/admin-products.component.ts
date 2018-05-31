import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$: FirebaseListObservable<any[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit() {}
}

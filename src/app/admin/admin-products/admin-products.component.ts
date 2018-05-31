import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  itemCount: number;
  items: Product[] = [];
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = products;

      this.initialiseTable(products);
    });
  }

  private initialiseTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource
      .query({
        offset: 0
      })
      .then(items => (this.items = items));
    this.tableResource.count().then(count => (this.itemCount = count));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    const filteredProducts = query
      ? this.products.filter(p =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;

    this.initialiseTable(filteredProducts);
  }

  reloadItems(params) {
    if (!this.tableResource) return;
    this.tableResource.query(params).then(items => (this.items = items));
  }
}

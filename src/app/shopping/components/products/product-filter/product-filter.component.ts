import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  @Input() category: string;

  categories$: Observable<any[]>;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model'
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.get('products')
      // .pipe(map((res: Response)=> res.json()))
      .subscribe(data=> this.products = data);
  }

}

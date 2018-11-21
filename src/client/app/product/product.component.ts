import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../shared/product.model'
import { CartProduct } from '../shared/cart-product.model'
import { ApiService } from '../shared/api.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('class') columnClass=" four wide column"

  loading: Boolean = false;
  addedToCart: CartProduct;
  newItem: CartProduct;
  constructor(public api: ApiService) { }

  ngOnInit() {

  }
  addToCart(){
    this.loading = true;

    const addToCart: CartProduct = this.product

    this.api.post(`users/${localStorage.id}`, addToCart ) //,requestOptions
      .subscribe(data => {
        this.loading = false;
        this.addedToCart = data;
        this.newItem = addToCart;
      });
  };

}

import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../shared/product.model'
import { CartProduct } from '../shared/cart-product.model'
import { NgForm } from '@angular/forms';
import { ApiService } from '../shared/api.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @HostBinding('class') columnClass=" four wide column"

  loading: Boolean = false;
  // newCartProduct: CartProduct;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }
  addToCart(){
    const id = "5bed046ee713153f20cfd8cb"
    this.loading = true;

    const addToCart: CartProduct = this.product

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    debugger
    this.api.post(`users/${id}`, addToCart ) //,requestOptions
      // .pipe(map((res: Response)=> res.json()))
      .subscribe(data => {
        // form.reset();
        this.loading = false;
        this.addToCart = data;
      });

  }

}

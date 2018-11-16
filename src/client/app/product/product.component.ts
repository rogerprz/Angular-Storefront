import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../shared/product.model'
import { CartProduct } from '../shared/cart-product.model'
// import { NgForm } from '@angular/forms';
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

  constructor(public api: ApiService) { }

  ngOnInit() {
  }
  addToCart(){
    this.loading = true;

    const addToCart: CartProduct = this.product

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("addToCARTTT",addToCart)
    this.api.post(`users/${localStorage.id}`, addToCart ) //,requestOptions
      .subscribe(data => {
        console.log("DATAA",data)
        this.loading = false;
        this.addedToCart = data;
      });

  }

}

import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart-item.model'
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart[];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.get('cart')
    .subscribe(data=> this.cart = data);
  }

}

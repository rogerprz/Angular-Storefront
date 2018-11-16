import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../shared/cart-product.model'
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartProducts: CartProduct[];

  constructor( public api: ApiService ) { }

  ngOnInit() {
    this.api.get(`users/${localStorage.id}`)
      .subscribe(data=> {
        console.log("DATAAA", data.cart)
        this.cartProducts = data.cart);
  }


}

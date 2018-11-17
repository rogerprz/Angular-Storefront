import { Component, OnInit, EventEmitter, Input, Output, HostBinding } from '@angular/core';
import { CartProduct } from '../shared/cart-product.model'
import { ApiService } from '../shared/api.service'


@Component({
  selector: 'app-cartProduct',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() cartProduct: CartProduct;
  @Input() cartProducts: CartProduct[];


  @HostBinding('class') columnClass = 'four wide column';

  @Output() itemRemoved = new EventEmitter<boolean>();

  loading: Boolean = false;


  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  removeFromCart(){
    // TOFIX
    document.getElementById(`${this.cartProduct._id}`).remove()
    this.loading = true;
    const itemID = this.cartProduct
    // console.log("itemID",itemID)
    console.log("START OF PUT", itemID._id)
    this.api.put(`users/${localStorage.id}/cart`, itemID ) //,requestOptions
      .subscribe(data => {
        console.log("SUBSCRIBE_DATA",data);
        this.cartProducts = data.value.cart;
      });
  }

}

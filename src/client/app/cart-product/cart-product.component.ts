import { Component, OnInit, EventEmitter, Input, Output, HostBinding } from '@angular/core';
// import { CartProduct } from '../shared/cart-product.model'
import { ApiService } from '../shared/api.service'


@Component({
  selector: 'app-cartProduct',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  // @Input() cartProducts: CartProduct[];

  @Input() cartProduct;
  @HostBinding('class') columnClass = 'four wide column';
  @Output() delete = new EventEmitter();

  loading: Boolean = false;

  constructor(public api: ApiService) { }

  ngOnInit() {}

  removeFromCart(){
    console.log("removed!!!!")
    this.delete.emit(this.cartProduct);

    
  }

}

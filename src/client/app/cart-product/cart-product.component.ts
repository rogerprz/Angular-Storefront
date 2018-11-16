import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CartProduct } from '../shared/cart-product.model'

@Component({
  selector: 'app-cartProduct',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() cartProduct: CartProduct;

  @HostBinding('class') columnClass = 'sixteen wide column';
  constructor() { }

  ngOnInit() {
  }

}

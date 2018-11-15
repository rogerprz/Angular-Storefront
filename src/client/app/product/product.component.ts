import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../shared/product.model'
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
  constructor() { }

  ngOnInit() {
  }
  addToCart(values){
    debugger
    this.clickMe = "testing bbb";
    this.product = product
  }

}

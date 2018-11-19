import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Coupon } from '../shared/coupon.model'
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  @Input() coupon: Coupon;

  @HostBinding('class') columnClass=" four wide column"


  constructor(public api: ApiService) { }

  ngOnInit() {
  }

}

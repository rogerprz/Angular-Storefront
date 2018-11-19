import { Component, OnInit } from '@angular/core';
import { Coupon } from '../shared/coupon.model'
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  constructor(public api: ApiService) { }

  coupons: Coupon[];

  ngOnInit() {
    this.api.get('coupons')
      .subscribe(data=> this.coupons = data);
  }

}

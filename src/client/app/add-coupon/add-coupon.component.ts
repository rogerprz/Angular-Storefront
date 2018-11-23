import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coupon } from '../shared/coupon.model';
import { ApiService } from '../shared/api.service';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  loading: Boolean = false;
  newCoupon: Coupon;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;

    const formValues = Object.assign({}, form.value);

    const coupon: Coupon = {
      couponValue: formValues.couponValue,
      discountType: formValues.discountType,
      discountValue: formValues.discountValue,
      vendorUsername: `${localStorage.vendorUsername}`
    }

    this.api.post('coupons', coupon )
      .subscribe(data => {
        form.reset();
        this.loading = false;
        this.newCoupon = data;
      });
  }
}

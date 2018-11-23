import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../shared/api.service';
// import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-coupon-input',
  templateUrl: './coupon-input.component.html',
  styleUrls: ['./coupon-input.component.css']
})
export class CouponInputComponent implements OnInit {

  @Output() coupon = new EventEmitter();
  @Input() couponInput : string;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }
  submitCoupon(form: NgForm){
    const value = form.value
    console.log(value);
    this.coupon.emit(value)
    form.reset();

  }

}

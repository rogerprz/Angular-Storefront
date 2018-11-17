import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-coupon-input',
  templateUrl: './coupon-input.component.html',
  styleUrls: ['./coupon-input.component.css']
})
export class CouponInputComponent implements OnInit {

  constructor(private api: ApiService,
              private auth: AuthService,
              ) { }

  ngOnInit() {
  }
  applyCoupon(form: NgForm){

  }

}

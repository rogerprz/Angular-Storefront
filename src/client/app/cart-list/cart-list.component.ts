import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../shared/cart-product.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
   total: number = 0;
   count: number = 0;
   discountTotal: number = 0;
   totalAfterSavings: number = 0
   cartProducts: CartProduct[];
   currCouponValue;
   finalTotal: number = -1;
   couponName: string = '';
   percentSavings: number = 100
  constructor( public api: ApiService ) { }

  ngOnInit() {
    this.getCartItems()
  };
  getCartItems(){
    this.api.get(`users/${localStorage.id}`)
      .subscribe(data=> {
        this.cartTotal(data.cart);
        this.cartProducts = data.cart})
  };

  deleteCartItem(cartProduct){
    this.api.put(`users/${localStorage.id}/cart`, cartProduct )
      .subscribe(data => {
        let cart = data.value.cart
        this.getCartItems();
        this.cartTotal(cart)
      });
  };
  verifyCoupon(coupon){

    this.api.post(`/coupons/${coupon.couponCode}`, coupon)
    .subscribe(c => {
      if (coupon === null){
        return alert("Coupon not available")
      } else{
        this.finalTotal = this.determineCouponDiscount( c.discountValue, c.discountType)
        this.couponName = c.couponCode;
      };

    });
  }

  cartTotal(cartArray){
    this.total = 0;
    this.count = 0;
    this.discountTotal = 0;
    this.totalAfterSavings = 0
    cartArray.forEach(item =>{
      this.count += 1
      this.total+= item.unit_price
      this.discountTotal+= item.discount_price
      this.totalAfterSavings = this.total - this.discountTotal
    })
  };

  determineCouponDiscount(amount, type){
    if (type ==="percent"){
      this.currCouponValue = 1 - parseFloat(`.${amount}`)

      return (this.totalAfterSavings * this.currCouponValue)
    }
    else if (type === "amount" || type==="fixed"){
      this.currCouponValue = parseFloat(amount)
      let final = (this.totalAfterSavings - this.currCouponValue);
      return ((final <= 0) ? 0 : final);
    }
  }
};

import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../shared/cart-product.model';
import { ApiService } from '../shared/api.service';
// import { CouponInputComponent } from ''
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
   total = 0;
   discountTotal = 0;
   totalAfterSavings = 0
   cartProducts: CartProduct[];
   currCouponValue;
   finalTotal = -1;
   couponName = '';
  constructor( public api: ApiService ) { }

  ngOnInit() {
    this.getCartItems()
  };
  getCartItems(){
    this.api.get(`users/${localStorage.id}`)
      .subscribe(data=> {
        console.log("GETCART",data.cart);
        this.cartTotal(data.cart);
        this.cartProducts = data.cart})
  };

  deleteCartItem(cartProduct){
    console.log(cartProduct);
    this.api.put(`users/${localStorage.id}/cart`, cartProduct )
      .subscribe(data => {
        let cart = data.value.cart
        console.log("SUBSCRIBE_DATA",data);
        this.getCartItems();
        this.cartTotal(cart)
        // this.cartTotal(data.value.cart)
      });
  };
  verifyCoupon(coupon){

    this.api.post(`/coupons/${coupon.couponCode}`, coupon)
    .subscribe(c => {
      console.log("SUBSCRIBE_DATA",c);
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
    this.discountTotal = 0;
    this.totalAfterSavings = 0
    cartArray.forEach(item =>{
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

// subtractCartItemFromCart(itemPrice, itemDiscount){
//   this.total = this.total - itemPrice;
//   this.discountTotal = this.discountTotal - itemDiscount;
// }

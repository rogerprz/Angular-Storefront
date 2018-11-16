import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './shared/api.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './auth.guard';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponComponent } from './coupon/coupon.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddProductComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    CartListComponent,
    CartProductComponent,
    AddCouponComponent,
    CouponListComponent,
    CouponComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

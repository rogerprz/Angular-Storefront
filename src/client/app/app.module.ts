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
import { AuthService } from './shared/auth.service';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddProductComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    SessionListComponent,
    SessionItemComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

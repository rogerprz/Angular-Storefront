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

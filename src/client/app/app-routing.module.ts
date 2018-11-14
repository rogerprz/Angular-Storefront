import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ContactListComponent } from './contact-list/contact-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartListComponent } from './login/cart-list.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'contacts',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'contacts',
  //   component: ContactListComponent
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  {
    path: 'cart-list',
    component: CartListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

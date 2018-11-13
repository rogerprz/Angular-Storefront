import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/contact.model';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  loading: Boolean false; //component ui state
  newProduct: Product;

  constructor(public http:Http) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm){
    this.loading = true;

    const formValues = Object.assign({}, form.value){
      name: `${formValues.name}`,
      quantity_available:`${formValues.quantityAvailable}`,
      minimum_quantity:`${formValues.minimumQuantity}`,
      editable_quantity:`${formValues.editableQuantity}`,
      format:`${formValues.format}`,
      unit_price:`${formValues.unitPrice}`,
      discount_price:`${formValues.discountPrice}`,



    }

  }

}

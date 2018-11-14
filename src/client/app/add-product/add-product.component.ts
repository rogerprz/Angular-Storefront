import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/product.model';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  loading: Boolean = false;
  newproduct: product;

  constructor(public http: Http) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;

    const formValues = Object.assign({}, form.value);

    const product: Product = {
      name:               formValues.name,
      selected:           false,
      quantity:           formValues.quantity,
      minimum_quantity:   formValues.minimumQuantity,
      editable_quantity:  formValues.editableQuantity,
      removeable:         true,
      format:             formValues.format,
      unit_price:         formValues.unitPrice,
      discount_price:     formValues.discountPrice,
      imageUrl:           "/images/coke-zero-20oz.jpeg"
    }


    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestOptions = new RequestOptions({ headers: headers });

    this.http.post('/api/products', product, requestOptions)
      .map((res: Response) => res.json())
      .subscribe(data => {
        form.reset();
        this.loading = false;
        this.newProduct = data;
      });
  }

}

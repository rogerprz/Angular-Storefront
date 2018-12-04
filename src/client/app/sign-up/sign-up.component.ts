import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loading: Boolean = false;
  newUser: User;

  constructor(private api: ApiService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log("form", form)


    const formValues = Object.assign({}, form.value);

    const user: User = {
      username:   formValues.username,
      password:   formValues.password,
      vendor:     false,
      admin:      false,
      cart:       [],
      orders:     [],
    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (formValues.vendorCode.length > 0 && formValues.vendorCode !== "newVendor"){
      return alert("Invalide Vendor Code..")
    }
    else if(formValues.vendorCode === "newVendor"){
      user.vendor = true;
      user.admin = true;
    }
    this.api.post('users', user ) //,requestOptions
      .subscribe(data => {
        console.log("dataaa",data)
        this.auth.setToken(data.token);
        this.auth.setID(data.id);
        this.auth.setVendor(data.vendor);
        this.router.navigate(['/products']);
        });
  }

}

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
    this.loading = true;


    const formValues = Object.assign({}, form.value);
    if (formValues.vendorCode !== "fastspring"){
      return alert("Invalide Vendor Code..")
    } else{
      const user: User = {
        username:   formValues.username,
        password:   formValues.password,
        vendor:     true,
        admin:      true,
      }


      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      // const requestOptions = new RequestOptions({ headers: headers });

      this.api.post('users', user ) //,requestOptions
        .subscribe(data => {
            form.reset();
            this.loading = false;
            this.newUser = data;
          });

    }
  }

}

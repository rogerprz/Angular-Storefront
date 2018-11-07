import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Contact } from '../shared/contact.model'
import { map } from "rxjs/operators"

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('/api/contacts')
      .pipe(map((res: Response)=> res.json()))
      .subscribe(data=> this.contacts = data);
  }

}

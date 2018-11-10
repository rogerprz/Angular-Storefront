import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Contact } from '../shared/contact.model'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;

  @HostBinding('class') columnClass=" four wide column"
  
  constructor() { }

  ngOnInit() {
  }

}

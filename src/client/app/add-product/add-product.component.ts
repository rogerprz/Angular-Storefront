import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function(){
    //
    //   $('.select')
    //   .dropdown({
    //     values: [
    //       {
    //         name: 'Physical',
    //         value: 'physical'
    //       },
    //       {
    //         name     : 'Digital',
    //         value    : 'digital',
    //       },
    //       {
    //         name     : 'Mixed',
    //         value    : 'mixed',
    //       }
    //     ]
    //   })
    // }
  }

}

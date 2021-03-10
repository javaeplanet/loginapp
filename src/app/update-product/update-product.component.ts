import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
form:FormGroup;

  constructor(private build:FormBuilder) {

    this.form=this.build.group({
      productId:['null'],
 productName: ['',Validators.required],
 productCost: ['',Validators.required],
 productDescription:['',Validators.required]
    });
   }

  ngOnInit() {
   
  }
  

}

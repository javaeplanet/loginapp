import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


import { ProductService } from './../product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
form:FormGroup;


productId:number;

  constructor(private build:FormBuilder, private service:ProductService, private route: ActivatedRoute) {

    this.form=this.build.group({
      productId:['null'],
 productName: ['',Validators.required],
 productCost: ['',Validators.required],
 productDescription:['',Validators.required]
    });
   }


   

  ngOnInit() {
    // this.form.setValue(this.product);
  }

  

}

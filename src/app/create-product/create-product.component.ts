import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './../product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
form:FormGroup;
//
  constructor(private build:FormBuilder, private service:ProductService, public snackBar:MatSnackBar) {
   this.form=this.build.group({
     productId:['null'],
productName: ['',Validators.required],
productCost: ['',Validators.required],
productDescription:['',Validators.required]
   });


   }

   public success(msg){
    this.snackBar.open(msg, 'OK')
  }
   onSubmit(){
     if(this.form.valid){
      
       this.service.createProduct(this.form.value)
       
       this.form.reset()
       this.success("record inserted successfully")

     }
   }
  ngOnInit() {
    this.service.getProducts();
  }

}

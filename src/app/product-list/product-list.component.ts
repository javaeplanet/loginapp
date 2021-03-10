import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from './../product.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
listData:MatTableDataSource<any>;
displayedColumns: string[]=['productName','productCost','productDescription','actions']
  constructor(public service:ProductService, private router:Router) { }

  ngOnInit() {
    this.service.getProducts().subscribe(list=>{
      let array=list.map(item=>{
        return{
          productId:item.key,
          ...item.payload.val()
        }
      })
      this.listData=new MatTableDataSource(array)
    })
  }
  onDelete(productId){
    if(confirm('are you sure to delete')){
      this.service.deleteProduct(productId);
    }
  }
  onUpdate(row){

 this.router.navigate(['updateProduct/productId'])


// 


  }
}

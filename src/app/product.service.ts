import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:AngularFireList<any>;
  
 
  constructor(public fireBase :AngularFireDatabase, ) { 
  
  }
  
 



getProducts(){
  this.productList=this.fireBase.list('products');
  return this.productList.snapshotChanges();
}

getProductByProductId(productId:number){
  return this.fireBase.object('products/'+productId);
}

createProduct(pdt){
  this.productList.push({
    productName:pdt.productName,
    productCost:pdt.productCost,
    productDescription:pdt.productDescription
  })
}

updateProduct(pdt){
  this.productList.update(pdt.productId,{
    productName:pdt.productName,
    productCost:pdt.productCost,
    productDescription:pdt.productDescription
  })
}



deleteProduct(productId:string){
  this.productList.remove(productId);
}



}

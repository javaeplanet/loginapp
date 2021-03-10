import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {CreateProductComponent} from './create-product/create-product.component'
import {UpdateProductComponent} from './update-product/update-product.component';


const routes: Routes = [
  { path: '', redirectTo: 'loginPage', pathMatch: 'full'},
  
  {path:'loginPage', 
  component:LoginpageComponent},
  

  {
    path:'displayDashboard',
    component: DashboardComponent
  },
  {
    path:'createProduct',
    component: CreateProductComponent
  },
  {
    path:'updateProduct/:productId',
    component: UpdateProductComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }

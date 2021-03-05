import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  // {path:'',redirectTo:' ', pathMatch:'full'},
  // {path:'', component:LoginpageComponent},
  {path:'loginPage', component:LoginpageComponent},

  {
    path:'displayDashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }

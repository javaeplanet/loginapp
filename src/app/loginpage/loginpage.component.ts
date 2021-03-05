import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
   
form:FormGroup; 
hide=true;    
user:any ={};     
                         
  constructor(private build:FormBuilder, private router:Router) {
    this.form=this.build.group({
      email:['',Validators.required],
      password:['',Validators.required ]
    });
   }


  public onClick(){
     if(this.form.valid){

       this.router.navigate(['/displayDashboard'])
       console.log(this.form.getRawValue());
     }else{
       console.log("There is a Problem with the form ")
     }
     this.user=Object.assign(this.user, this.form.value)
     this.addUser(this.user);
   }

   addUser(user){


localStorage.setItem('User',JSON.stringify(user));
   }
   ngOnInit(): void {
  }
  }







 



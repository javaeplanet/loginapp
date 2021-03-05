import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() public isUserLoggedIn: boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.isUserLoggedIn=true;
  }
public onClick(){
  
this.router.navigate(['/loginPage'])

  
  
}
}

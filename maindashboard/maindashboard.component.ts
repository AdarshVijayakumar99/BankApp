import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {

  
  constructor(private myserve: CustomerService,private myroute: RouterService) {
    this.myserve.fetchaccountFromServer();
  }

  ngOnInit(): void {
  }
  logout()
  {
    sessionStorage.clear();
    this.myroute.routeToLogin();
  }

}
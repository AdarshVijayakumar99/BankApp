import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value:string= "login";
 

  constructor(private myroute: RouterService) {
  }

  
ngOnInit(){}

login(){
  if(this.value === "login"){
  this.myroute.routeToLogin();
  this.value="Back To Home"
  }
  else{
   this.myroute.routeToHome();
  this.value="login"
}

}

register(){
  this.myroute.routeToRegister();
}

}
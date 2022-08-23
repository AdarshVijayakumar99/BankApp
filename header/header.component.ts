import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value:string="login";
 

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



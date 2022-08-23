import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpcli: HttpClient) {

  }

  authenticateUser(data: any): Observable<any> {
    return this.httpcli.post('http://127.0.0.1:7070/registerstatus', data);

  }

  setBearerToken(token) {
    sessionStorage.setItem('mytoken', token);

  }

  getBearerToken() {
    return sessionStorage.getItem('mytoken');

  }


  //isUserAuthenticated(token): Promise<boolean> {
     // return;
 // }
}

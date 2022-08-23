// import { Injectable } from '@angular/core';
// import { customer } from '../customer'
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { tap } from 'rxjs/operators';
// import 'rxjs/operators';
// import { register } from '../register';
// @Injectable()
// export class CustomerService {
//   customers: Array<customer> = [];
//   customers1: Array<customer> = [];
//   customer1 = new customer()
//   customersSubject: BehaviorSubject<Array<customer>>;
//   customersSubject1: BehaviorSubject<Array<customer>>;
//   registers:Array<register>=[];
//   registersSubject:BehaviorSubject<Array<register>>
//   bankid:number
//   constructor(private httpcli: HttpClient) {
//     this.customersSubject = new BehaviorSubject<Array<customer>>([]);
//     this.customersSubject1 = new BehaviorSubject<Array<customer>>([]);
//   }
//  // customers: Array<customer>;
//  // customersubject: BehaviorSubject<Array<customer>>;

//   fetchaccountFromServer() {
//     const tok = localStorage.getItem('mytoken');

//     return this.httpcli.get<Array<customer>>('http://127.0.0.1:7070/customerdata')
//       // {
//       //   headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
//       // })
//       .subscribe
//       (
//         res => {
//           //this.bankid= Number(sessionStorage.getItem('bid'))
//           this.customers= res;
//           //this.customers = this.customers1.filter(i=>i.bid==this.bankid)
//          // this.customersSubject1.next(this.customers1);



//           //this.customersSubject.next(this.customers);

//         },
//         (err) =>
//           this.customersSubject.error(err)
//       );
//  }

//   getaccount(): BehaviorSubject<Array<customer>> {

//     return this.customersSubject;
//  }



// import { Injectable } from '@angular/core';
// import { customer } from '../customer'
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { tap } from 'rxjs/operators';
// import 'rxjs/operators';
// import { register } from '../register';
// @Injectable()
// export class CustomerService {
//   customers: Array<customer> = [];
//   customers1: Array<customer> = [];
//   customer1 = new customer()
//   customersSubject: BehaviorSubject<Array<customer>>;
//   customersSubject1: BehaviorSubject<Array<customer>>;
//   registers:Array<register>=[];
//   registersSubject:BehaviorSubject<Array<register>>
//   uname:string
//   constructor(private httpcli: HttpClient) {
//     this.customersSubject = new BehaviorSubject<Array<customer>>([]);
//     this.customersSubject1 = new BehaviorSubject<Array<customer>>([]);
//   }
//  // customers: Array<customer>;
//  // customersubject: BehaviorSubject<Array<customer>>;

//   fetchaccountFromServer() {
//     const tok = localStorage.getItem('mytoken');

//     return this.httpcli.get<Array<customer>>('http://127.0.0.1:7070/mybankacc')
//       // {
//       //   headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
//       // })
//       .subscribe
//       (
//         res => {
//           this.uname= sessionStorage.getItem('uname')
//           this.customers1 = res.filter( item => item.UIC === this.uname);
//           this.customers=this.customers1
//           this.customersSubject.next(this.customers1);
//           this.customersSubject.next(this.customers);
//         },
//         (err) =>
//           this.customersSubject.error(err)

//       );
//  }

//   getaccount(): BehaviorSubject<Array<customer>> {
//     return this.customersSubject;
//  }





















import { Injectable } from '@angular/core';
import { customer } from '../customer'
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import 'rxjs/operators';
import { register } from '../register';
@Injectable()
export class CustomerService {
  customers: Array<customer>=[]

  // customers1: Array<customer> = [];
  // customer1 = new customer()

  customersSubject: BehaviorSubject<Array<customer>>;

  //customersSubject1: BehaviorSubject<Array<customer>>;
  // registers:Array<register>=[];
  // registersSubject:BehaviorSubject<Array<register>>
  // bankid:number
  // first=[]
  uname:string
  constructor(private httpcli: HttpClient) {
    this.customersSubject = new BehaviorSubject<Array<customer>>([]);

  }
 // customers: Array<customer>;
 // customersubject: BehaviorSubject<Array<customer>>;

  fetchaccountFromServer() {

    return this.httpcli.get<Array<customer>>('http://127.0.0.1:7070/mybankacc')
      // {
      //   headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
      // })
      .subscribe
      (
        res => {
          // this.first=res["data"]
          console.log(res)
          //this.customers1= res;

          //console.log(this.customer1)
          this.uname= sessionStorage.getItem('uname')
          console.log(this.uname)

          this.customers = res.filter( item => item.UIC == this.uname);

          //.filter(i=>i.UIC===this.uname)
          //this.customers=this.customers1.filter( item => item.UIC === this.uname);

          console.log(this.customers)

         // this.customersSubject1.next(this.customers1);



           this.customersSubject.next(this.customers);
          console.log(this.customersSubject)
         //this.customersSubject?.next(this.customers);

        },
        (err) =>
          this.customersSubject.error(err)
      );
 }

getaccount(): BehaviorSubject<Array<customer>> {
    console.log(this.customersSubject);
    return this.customersSubject;
 }


  addaccount(customer: any): Observable<any> {
    const tok = sessionStorage.getItem('mytoken');

    return this.httpcli.post('http://127.0.0.1:7070/mybankacc', customer)
      .pipe(

        tap((res) => {
          if(res['message'] == "Account Created"){
          this.customers.push(customer);
          this.customersSubject.next(this.customers);
        }
        })
      );
  }

//  // editNote(note: customer): Observable<customer> {

//  // }

 getReg(): Observable<Array<register>> {
  //const tok = localStorage.getItem('mytoken');
  return this.httpcli.get<Array<register>> ('http://127.0.0.1:7070/registerstatus')
  // {
  //  headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
  // });

}
editaccount(acnt: customer): Observable<customer>
{
 let token = localStorage.getItem("mytoken")
 console.log("inside edit");

 return this.httpcli.put(`http://127.0.0.1:7070/mybankacc/${acnt.Accno}`, acnt,
   {
     headers : new HttpHeaders().set("Authorization", `Bearer ${token}`)
   }
 )
 .pipe
 (
   tap
   (
     (editaccount : any) =>
                        {
                          console.log("Edited");
                          console.log(editaccount);
                          let oldnote = this.customers.find(items => items.Accno == acnt.Accno);
                          Object.assign(oldnote, editaccount);
                          this.customersSubject.next(this.customers)
                        }
   )
 )
}

 getaccountById(bankId : any): customer
 {
   const account = this.customers.find(data => data.Accno == bankId);
   return account;
 }

 getmyacct(): Observable<Array<customer>> {
  const tok = sessionStorage.getItem('mytoken');
  return this.httpcli.get<Array<customer>> ('http://127.0.0.1:7070/mybankacc',
   {
    headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
   });

}
}


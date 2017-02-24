/**
 * Created by Marius on 2017.02.24.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';

@Injectable()
export class CustomerService {

  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) {
  }


  create(customer: Customer): Promise<Customer> {
    return this.http
      .post("https://loaning-api.herokuapp.com/customer/add", JSON.stringify({customer: Customer}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}










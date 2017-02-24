import { Component } from '@angular/core';
import { Router }            from '@angular/router';

import { Customer }                from './Customer';
import { CustomerService }         from './customer.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  customers: any;


  add(customer: Customer): void {
    customer=customer;

    if (!customer) {
      return;
    }
    this.CustomerService.create(customer)
      .then(customer => {
        this.customers.push(customer);

      });
  }
}

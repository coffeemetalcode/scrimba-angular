import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _customers: Customer[];
  @Input() get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: Customer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: Customer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string) {
    // Move to service later

  }

}

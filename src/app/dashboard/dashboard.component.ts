import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  display = 'none';
  payments: Array<object> = [];
  selectedPayment: object = {};
  searchText;

  constructor() { }

  ngOnInit() {
    this.payments = [{
      name: 'Mark',
      amount: 200000,
      currency: 'USD',
      accountNumber: 'ABIN000432432432'
    },
    {
      name: 'John',
      amount: 300000,
      currency: 'USD',
      accountNumber: 'ABIN000432432432'
    },
    {
      name: 'David',
      amount: 400000,
      currency: 'GBR',
      accountNumber: 'ABIN000432432432'
    }];
  }

  openModalDialog(payment) {
    this.selectedPayment = payment;
    this.display = 'block'; // Set block css
  }

  closeModalDialog() {
    this.selectedPayment = {};
    this.display = 'none'; // set none css after close dialog
  }
}

import { Component, OnInit, ViewEncapsulation, asNativeElements } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TYPES } from '../entries/entries.component';




@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})

export class TransactionFormComponent implements OnInit {

  transactionFrom: FormGroup;
  types: Array<string> = [];
  currency: Array<string> = [];

  constructor(private formBuilder: FormBuilder) {
    this.transactionFrom = formBuilder.group({
      merchant: ['', Validators.required],
      payer: [null, Validators.required],
      currency: [null, Validators.required],
      amount: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.types = [
      'Please select Currency',
      'Merchant',
      'Payer'
    ];
    this.currency = [
      'Please select Currency',
      'Merchant',
      'Payer'
    ];
  }

  submitTransaction() {
    console.log(this.transactionFrom.value);
  }

}

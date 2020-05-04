import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})

export class PaymentDetailsComponent implements OnInit {

  @Input() selectedPayment: Payment;

  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModalDialog(event) {
    this.closeModal.emit(event);
  }
}

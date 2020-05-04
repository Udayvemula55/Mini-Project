import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface TYPES {
  name: string;
}

export interface CURRENCY {
  name: string;
}

export interface PAYERS {
  name: string;
}

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EntriesComponent implements OnInit {

  showRegFrom = false;

  constructor(// tslint:disable-next-line: align
    router: Router) {

    if (router.url === '/register') {
      this.showRegFrom = true;
    } else {
      this.showRegFrom = false;
    }
  }

  ngOnInit() {
  }

  toggleForm(): void {
    this.showRegFrom = !this.showRegFrom;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntriesComponent } from './entries/entries.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InputComponent } from './input/input.component';
import { InputSampleScreenComponent } from './input-sample-screen/input-sample-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    TransactionFormComponent,
    DashboardComponent,
    EntriesComponent,
    PaymentDetailsComponent,
    InputComponent,
    InputSampleScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

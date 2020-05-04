import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntriesComponent } from './entries/entries.component';
import { InputSampleScreenComponent } from './input-sample-screen/input-sample-screen.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: EntriesComponent },
  { path: 'transaction', component: EntriesComponent },
  { path: 'inputs', component: InputSampleScreenComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

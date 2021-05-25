import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from '../containers/all/all.component';
import { ActiveComponent } from '../containers/active/active.component';
import { CompletedComponent } from '../containers/completed/completed.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'completed', component: CompletedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }

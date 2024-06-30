import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryTableComponent } from './components/summary-table/summary-table.component';

const routes: Routes = [
  {
    path: "", component: SummaryTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryTableRoutingModule { }

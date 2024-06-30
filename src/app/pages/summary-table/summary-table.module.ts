import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryTableRoutingModule } from './summary-table-routing.module';
import { SummaryTableComponent } from './components/summary-table/summary-table.component';


@NgModule({
  declarations: [
    SummaryTableComponent
  ],
  imports: [
    CommonModule,
    SummaryTableRoutingModule,
    FormsModule
  ],
  exports: [
    SummaryTableComponent
  ]
})
export class SummaryTableModule { }

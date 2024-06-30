import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    FormsModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }

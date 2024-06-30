import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SearchModule } from '../search/search.module';
import { DataTableModule } from '../data-table/data-table.module';
import { SummaryTableModule } from '../summary-table/summary-table.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchModule,
    DataTableModule,
    SummaryTableModule
  ]
})
export class HomeModule { }

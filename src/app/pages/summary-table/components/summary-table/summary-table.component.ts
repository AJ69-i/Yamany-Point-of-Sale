import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss']
})
export class SummaryTableComponent implements OnChanges {
  @Input() subTotal!: number;
  total!: number;
  tax: number = 0.14;
  discount: number = 0;
  discountValue!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['subTotal']) {
      this.total = ((this.subTotal * this.tax) +  this.subTotal) - this.discount;
    }
  }

  getDiscount() {
    if(this.discountValue < 0) {
      this.discountValue = 0;
    }
    this.discount = this.discountValue;
    this.total = (this.subTotal * this.tax) - this.discount;
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { product } from '../../modal/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  searchedProduct!: string;
  subTotal!: number;


  receiveSearchedItem(searchedProduct: string) {
    this.searchedProduct = searchedProduct;
  }

  receiveSubTotal(subTotal: number) {
    this.subTotal = subTotal;
  }

  
}

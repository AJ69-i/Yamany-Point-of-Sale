import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { product } from 'src/app/pages/home/modal/product';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() searchedProduct!: string;
  @Output() sub_total = new EventEmitter<number>();
  product: product[] = [];
  searchedProducts: product[] = [];
  QtyItem!: string;
  subTotal!: number;

  constructor(private products: ProductsService) {}

  ngOnInit(): void {
    this.loadSavedProducts();

    this.products.getProducts().subscribe({
      next: (products) => {
        this.product = products;

        this.product.forEach((obj) => {
          Object.defineProperty(obj, 'total_price', {
            value: obj.price,
            writable: true,
            enumerable: true,
            configurable: true,
          });

          Object.defineProperty(obj, 'qty', {
            value: 1,
            writable: true,
            enumerable: true,
            configurable: true,
          });
        });
      },
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchedProduct']) {
      this.searchedProducts = this.product.filter((product) => {
        return product.title.includes(this.searchedProduct);
      });

      const storedProducts = JSON.parse(
        localStorage.getItem('products') || '[]'
      );
      this.searchedProducts = this.searchedProducts.concat(storedProducts);

      this.searchedProducts = this.searchedProducts.filter(
        (product, index, self) =>
          index === self.findIndex((t) => t.title === product.title)
      );

      localStorage.setItem('products', JSON.stringify(this.searchedProducts));

      this.subTotal = this.searchedProducts.reduce(
        (sum, product) => sum + product.total_price,
        0
      );
      this.sub_total.emit(this.subTotal);
    }
  }

  loadSavedProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.searchedProducts = storedProducts;
  }

  minus(index: number) {
    if (this.searchedProducts[index].qty > 0) {
      this.searchedProducts[index].qty -= 1;
      this.searchedProducts[index].total_price =
      this.searchedProducts[index].qty * this.searchedProducts[index].price;
      localStorage.setItem('products', JSON.stringify(this.searchedProducts));
      this.subTotal = this.searchedProducts.reduce(
        (sum, product) => sum + product.total_price,
        0
      );
      this.sub_total.emit(this.subTotal);
    }
  }

  add(index: number) {
    this.searchedProducts[index].qty += 1;
    this.searchedProducts[index].total_price =
    this.searchedProducts[index].qty * this.searchedProducts[index].price;
    localStorage.setItem('products', JSON.stringify(this.searchedProducts));
    this.subTotal = this.searchedProducts.reduce(
      (sum, product) => sum + product.total_price,
      0
    );
    this.sub_total.emit(this.subTotal);
  }

  trackById(index: number, product: product) {
    return product.id;
  }
}

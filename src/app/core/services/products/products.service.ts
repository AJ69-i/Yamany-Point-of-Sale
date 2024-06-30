import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient:HttpClient) { }

  getProducts():Observable<any> {
    return this.HttpClient.get<any>("products");
  }
}

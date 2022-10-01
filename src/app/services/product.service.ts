import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   url='http://localhost:3000/products/'
  constructor(private httpService: HttpClient) { }
  //form the backend Side
  getAllProduct(){
    return this.httpService.get(this.url)
  }
  addProduct(product: Product){
    return this.httpService.post(this.url,product)
  }
  deleteProduct(id:number){
    return this.httpService.delete(this.url+id)
  }
  updateProduct(product: Product){
    return this.httpService.put(this.url+product.id,product)
  }
}

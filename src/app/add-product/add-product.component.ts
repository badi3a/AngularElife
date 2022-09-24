import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit(): void {
    this.product= new Product();
    console.log(this.product)
  }
  save(){
    console.log(this.product)
  }
}

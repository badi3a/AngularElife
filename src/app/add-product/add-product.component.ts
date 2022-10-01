import { ProductService } from './../services/product.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  constructor(private prodService:ProductService,
    private route:Router) { }
  ngOnInit(): void {
    this.product= new Product();
    console.log(this.product)
  }
  save(){
    this.product.nbrLike=0;
    this.prodService.addProduct(this.product).subscribe(
      ()=>this.route.navigate(['products'])
    )

  }
}

import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: string;
  public list: Product[];
  constructor(private prodService: ProductService) {
  }
  ngOnInit(): void {
    this.title = 'MyShop';
    this.prodService.getAllProduct().subscribe(
       (data:Product[])=>{this.list=data}
    );
  }
  incrementLike(product: Product){
   let i= this.list.indexOf(product);
   if(i!=-1){
    this.list[i].nbrLike++;
   }
  }
  buyProduct(product:Product){
    let i= this.list.indexOf(product);
    if(i!=-1){
     this.list[i].quantity--;
    }
  }
  deleteProduct(product:Product){
    let i= this.list.indexOf(product);
    if(i!=-1){
      //cnx to backend service/api
      this.prodService.deleteProduct(product.id).subscribe(
        ()=> this.list.splice(i,1)
      )

    }
  }
  updateProduct(){

  }
}

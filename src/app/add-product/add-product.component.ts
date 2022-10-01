import { ProductService } from './../services/product.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  title: String;
  //Router pour la navigation
  //Activated pour lire les paramètres dans l url actif
  constructor(private prodService:ProductService,
                private route:Router,
                private currentRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
    this.product= new Product();
    this.title='add a new Product'}
    else{
      //update
      this.title='update the product with id: '+id;
      this.prodService.getById(id).subscribe(
        (data)=>this.product=data
      )
    }

  }
  save(){
   if(this.product.id==null){
    this.product.nbrLike=0;
    this.prodService.addProduct(this.product).subscribe(
      ()=>this.route.navigate(['products'])
    )
   }else{
    this.prodService.updateProduct(this.product).subscribe(
      ()=>this.route.navigate(['products'])
    )
   }
  }
}

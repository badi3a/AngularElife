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
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyShop';
    this.list=[
       {id:12,
        name: 'T-shirt 1',
        price: 25,
        nbrLike: 10,
        quantity: 3,
        description: 'nice Tshirt',
        picture: 'https://www.exist.com.tn/83302-home_default/t-shirt.jpg'
      },
      {id:13,
        name: 'T-shirt 3',
        price: 20,
        nbrLike: 10,
        quantity: 0,
        description: 'nice Tshirt',
        picture: 'https://www.exist.com.tn/61485-large_default/t-shirt.jpg'
      }
    ]
  }

}

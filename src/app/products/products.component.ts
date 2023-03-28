import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
  productList:IProduct[];//Array<IProduct>
  categoryList:ICategory[];
  clientName:string;
  isPurshased:boolean;

  constructor() {
    this.discount=DiscountOffers.No;
    this.storeName="Asyut Store";
    this.storeLogo="../assets/pic.png";
    this.productList=[
      {ID:1,name:"Samsung S23",quantity:10,price:1500,img:"../assets/phone.jpg"},
      {ID:2,name:"LG TV",quantity:15,price:3000,img:"../assets/tv.jpg"}
    ];
    this.categoryList=[
      {ID:1,name:"phones"},
      {ID:2,name:"TV"}
    ];
    this.clientName="Ahmed";
    this.isPurshased=true;
   }

  ngOnInit(): void {
  }

  show()
  {
    if(this.isPurshased)
        this.isPurshased=false;
      else 
      this.isPurshased=true;
  }

}

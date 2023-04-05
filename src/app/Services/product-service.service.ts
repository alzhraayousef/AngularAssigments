import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList=[
    {ID:1,name:"Samsung S23",quantity:10,price:1500,img:"../assets/phone.jpg",discount:true},
    {ID:2,name:"LG TV",quantity:15,price:3000,img:"../assets/tv.jpg",discount:false},
    {ID:3,name:"Samsung Note10",quantity:10,price:1500,img:"../assets/phone.jpg",discount:true},
    {ID:4,name:"Oppo",quantity:15,price:3000,img:"../assets/tv.jpg",discount:false}
  ];
  constructor() { }
 

  GetAllProducts()
  {
    return this.productList;
  }

  
  GetProductById(prdId:any)
  {
      if(isNaN(prdId))
      {
        return null;
      }
      for (const iterator of this.productList) 
      {
        if(iterator.ID==prdId)
           return iterator;
      }
      return null;
  }
}

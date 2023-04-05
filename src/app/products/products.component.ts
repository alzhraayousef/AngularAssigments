import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
  productList:any;//IProduct[]=[];//Array<IProduct>
  categoryList:ICategory[];
  clientName:string;
  isPurshased:boolean;

  ProductsWithDiscountList:any=[];
  ProductsWithoutDiscountList:any=[];


  constructor(private productService:ProductServiceService,private router:Router,private activatedRoute:ActivatedRoute) {

    this.discount=DiscountOffers.No;
    this.storeName="Asyut Store";
    this.storeLogo="../assets/pic.png";
    // this.productList=[
    //   {ID:1,name:"Samsung S23",quantity:10,price:1500,img:"../assets/phone.jpg"},
    //   {ID:2,name:"LG TV",quantity:15,price:3000,img:"../assets/tv.jpg"}
    // ];
    this.categoryList=[
      {ID:1,name:"phones"},
      {ID:2,name:"TV"}
    ];
    this.clientName="Ahmed";
    this.isPurshased=false;
   }

  ngOnInit(): void {
    this.productList = this.productService.GetAllProducts()
  }

  // show()
  // {
  //   if(this.isPurshased)
  //       this.isPurshased=false;
  //     else 
  //     this.isPurshased=true;
  // }


  renderValues()
  {
    this.productList = this.productService.GetAllProducts()
  }


  goToProductsWithDiscount()
  {
    this.ProductsWithDiscountList=[];
    for (const iterator of this.productList) {
      if(iterator.discount==true)
      this.ProductsWithDiscountList.push(iterator)
    }
    // const options = {queryParams:this.ProductsWithDiscountList};
    this.router.navigate(["ProductsWithDiscount",{queryParams:JSON.stringify(this.ProductsWithDiscountList)}],{relativeTo:this.activatedRoute});
  }

  goToProductsWithoutDiscount()
  {
    this.ProductsWithoutDiscountList=[];
    for (const iterator of this.productList) {
      if(iterator.discount==false)
      this.ProductsWithoutDiscountList.push(iterator)
    }
    this.router.navigate(["ProductsWithoutDiscount",{queryParams:JSON.stringify(this.ProductsWithoutDiscountList)}],{relativeTo:this.activatedRoute});
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products-without-discount',
  templateUrl: './products-without-discount.component.html',
  styleUrls: ['./products-without-discount.component.scss']
})
export class ProductsWithoutDiscountComponent implements OnInit {
  productList:any;

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.productList=params.get("queryParams");  }) 
   }

  ngOnInit(): void {
    
      if(this.productList)
      {
        this.productList=JSON.parse(this.productList)
      }
    
    }
}

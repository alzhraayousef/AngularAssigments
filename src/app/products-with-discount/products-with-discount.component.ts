import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products-with-discount',
  templateUrl: './products-with-discount.component.html',
  styleUrls: ['./products-with-discount.component.scss']
})
export class ProductsWithDiscountComponent implements OnInit {
  productList:any;

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.productList=params.get("queryParams");  }) 
   }

  ngOnInit(): void {
    
      if(this.productList)
      {

        this.productList=JSON.parse(this.productList)
        //console.log(this.productList)
      }
  
    }


}

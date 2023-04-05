import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 
  productList:IProduct[];
  @Output() childEvent=new EventEmitter();

  constructor() { 
    this.productList=[
      {ID:1,name:"Samsung S23",quantity:10,price:1500,img:"../assets/phone.jpg"},
      {ID:2,name:"LG TV",quantity:15,price:3000,img:"../assets/tv.jpg"},
      {ID:3,name:"Samsung Note10",quantity:10,price:1500,img:"../assets/phone.jpg"},
      {ID:4,name:"Oppo",quantity:15,price:3000,img:"../assets/tv.jpg"}
    ];
    
  }

  ngOnInit(): void {
    this.childEvent.emit(this.productList);
  }
 
  SayWelcome()
  {
    console.log("hello from child");
  }

}

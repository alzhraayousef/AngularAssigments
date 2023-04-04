import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent)child: ChildComponent = new ChildComponent;
  productList2:IProduct[]|undefined;
   flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   this.child.SayWelcome();  
  }

  getData()
  {
    this.flag=true;
  }

}

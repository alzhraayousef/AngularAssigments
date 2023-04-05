import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',//'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  @ViewChild(ProductsComponent) products :ProductsComponent | undefined;
  
  title = 'MyProject';

  display()
  {
      this.products?.renderValues();
  }

}

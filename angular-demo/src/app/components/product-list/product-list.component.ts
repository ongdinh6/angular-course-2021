import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products:Product[] = Product.products;

  constructor() {}

  ngOnInit(): void {}

  share(): void {
    alert('The product has been shared!')
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale')
  }
}

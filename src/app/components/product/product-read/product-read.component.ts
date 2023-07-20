import { Component } from '@angular/core';

import { Product } from '../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']

  
})
export class ProductReadComponent {

  products: Product[]
  displayedColumns = ['name', 'notaPort', 'notaInfo', 'email',  'action']
  // 'notaPort', 'notaInfo', 'email', 'price'

  constructor(private productService: ProductService) {  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}

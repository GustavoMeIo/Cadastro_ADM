import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    // price: null,
    email: '',
    notaPort: null,
    notaInfo: null
  }

  constructor(private productService: ProductService,
    private router: Router){  }

  ngOnInit(): void { }

  createProduct(): void{
    this.productService.create(this.product).subscribe( () =>
      {
        this.productService.showMenssage('Produto Criado!')
        this.router.navigate(['/products'])
      } 
    )

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}

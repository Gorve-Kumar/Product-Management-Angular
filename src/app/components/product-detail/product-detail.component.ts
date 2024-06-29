import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Bags } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  // @Input() 
  bag!: Bags;

  productService = inject(ProductService);
  
  activatedRouter = inject(ActivatedRoute);
  
  ngOnInit(){
    let productID = this.activatedRouter.snapshot.params["id"];
    this.productService.getProductsByID(productID).subscribe(result => {
      this.bag = result;
    });
  }

}

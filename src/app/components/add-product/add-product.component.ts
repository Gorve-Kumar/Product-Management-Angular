import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Bags } from '../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  bag: Bags = {
    title: "",
    brand: "",
    image: "",
    price: 0,
    discount: 0,
    available: false,
  };

  productService = inject(ProductService);
  router = inject(Router);

  addProduct(){
    // because of two way binding, variables are already defined.
    this.productService.addProduct(this.bag).subscribe(result => {
      alert("Product Saved");
      this.router.navigateByUrl("/");
    })
    console.log("Form Submitted!!", this.bag);
  }
}

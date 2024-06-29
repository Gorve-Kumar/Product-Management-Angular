import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Bags } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})

export class EditProductComponent {
  formBuilder = inject(FormBuilder); // helps in creating reactive form

  bagForm: FormGroup = this.formBuilder.group({
    // it is group of controls.
    id: [''],
    title: [''],
    brand: [''],
    image: [''],
    price: [''],
    discount: [''],
    available: [''],
  })

  productService = inject(ProductService);
  router = inject(Router);
  activatedRouter = inject(ActivatedRoute);

  ngOnInit() {
    let productID = this.activatedRouter.snapshot.params["id"];
    this.productService.getProductsByID(productID).subscribe(result => {
        this.bagForm.patchValue(result);
    });
  };

  editProduct() {
    this.productService.updateProduct(this.bagForm.value).subscribe(result=>{
      alert("Product Updated");
      this.router.navigateByUrl("/");
    });
    // console.log("Forms Edited", this.bagForm.value);
  };
}

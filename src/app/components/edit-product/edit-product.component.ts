import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Bags } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  toastrService = inject(ToastrService);

  bagForm: FormGroup = this.formBuilder.group({
    // it is group of controls.
    id: [''],
    title: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required, , Validators.minLength(1)]],
    discount: ['', [Validators.required]],
    available: [''],
  });

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
    if (this.bagForm.invalid) {
      this.toastrService.error("Please Provide Correct Information!!");
      return;
    }
    this.productService.updateProduct(this.bagForm.value).subscribe(result => {
      this.toastrService.success("Product Updated");
      this.router.navigateByUrl("/");
    });
    // console.log("Forms Edited", this.bagForm.value);

  };
}

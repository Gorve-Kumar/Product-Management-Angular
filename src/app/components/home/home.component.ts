import { Component, Output, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';
import { Bags } from '../../types/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent,
    SearchComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  // type=3;
  // types=[5,6,7,2];
  // products = [1,2,3,4,5,6,7,8,9,10];
  
  bags: Bags[] = [];
  productService = inject(ProductService);
  router = inject(Router);

  filteredBags: Bags[] = [];
  ngOnInit(){
    // this.bags = this.productService.bags;
    this.productService.getProducts().subscribe((result) => {
      // console.log(result);
      this.bags = result as Bags [];
      this.filteredBags = this.bags
    });
    // This also won't work as Code runs Asynchronous!!
    // this.filteredBags = this.bags
  };

  onViewProduct(event: any){
    console.log("View Clicked ", event);
    this.router.navigateByUrl('product/'+event);
  };

  onSearch(search: string){
    console.log("Search Received ", search);

    if (search){
      this.filteredBags = this.bags.filter(bag => bag.title.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredBags = this.bags;
    };
  };
};
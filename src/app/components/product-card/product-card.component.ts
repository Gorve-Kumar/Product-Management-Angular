import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Bags } from '../../types/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() bag_pack!: Bags;
  @Output() viewProduct = new EventEmitter<number>();
  
  view(){
    console.log("Triggering View Event!!");
    this.viewProduct.emit(this.bag_pack.id);
  }
}

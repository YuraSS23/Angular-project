import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {IProduct} from "./models/product";
import {ProductService} from "./services/product-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'my shop'
  products: IProduct[] = []
  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products=>{
      this.products = products
    })
  }

}

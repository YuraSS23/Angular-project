import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {CreateProductComponent} from "../../components/create-product/create-product.component";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "../../components/modal/modal.component";
import {ProductComponent} from "../../components/product/product.component";
import {ModalService} from "../../services/modal.service";
import {ProductService} from "../../services/product-service";

@Component({
  selector: 'app-product-page',
  standalone: true,
    imports: [
        AsyncPipe,
        CreateProductComponent,
        FilterProductsPipe,
        FormsModule,
        ModalComponent,
        NgForOf,
        NgIf,
        ProductComponent,
        TitleCasePipe
    ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  title = 'my shop'
  loading = false
  //products$: Observable<IProduct[]>
  term = ""

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    /* this.products$ = this.productsService.getAll().pipe(
       tap(() => this.loading = false)
     )*/
    this.productsService.getAll().subscribe(()=>{
      this.loading = false
    })
  }
}

import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {CurrencyPipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass
  ],
  templateUrl: "./product.component.html"
})

export class ProductComponent {
  @Input() product: IProduct

  details = false
}

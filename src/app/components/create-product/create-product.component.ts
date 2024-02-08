import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FocusDirective} from "../../directives/focus.directive";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FocusDirective
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  constructor(public modalService: ModalService) {
  }

  form = new FormGroup({
    title: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }


  submit() {
    console.log(this.form.value)
  }

}

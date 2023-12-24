import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

  articleReactiveForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    precio: ['', Validators.required],
    URLimagen: ['', Validators.required],
    venta: [''],   
  });

  constructor(private formBuilder: FormBuilder) {}

}

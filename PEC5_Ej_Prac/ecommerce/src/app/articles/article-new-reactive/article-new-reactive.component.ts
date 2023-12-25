import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// Importación de custom validations
import { misValidaciones } from './../../../util/misValidaciones';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

  articleReactiveForm = this.formBuilder.group({
    nombre: ['', [Validators.required, misValidaciones.NameArticleValidator]],
    precio: ['', [Validators.required, Validators.pattern('[0-9]+([\.,][0-9]+)?'), Validators.min(0.1)]],
    URLimagen: ['', [Validators.required, Validators.pattern('https?://.+')]],
    venta: [''],   
  });
  registrado = false;

  constructor(private formBuilder: FormBuilder) {}

  registrarArticulo(): void {
    console.log('Artículo registrado', this.articleReactiveForm.value, this.articleReactiveForm.invalid);
    this.registrado = true;
  }
}

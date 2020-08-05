import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import * as jsPDF from 'jspdf';

import { from } from 'rxjs';

import { Categoria } from '../../module/categoria';
import { CategoriaService } from './../../services/categoria.service';
import {ExcelService} from './../../services/excel.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers:[CategoriaService]
})
export class CategoriasComponent implements OnInit {

@ViewChild('scrollMe') private myScrollContainer: ElementRef;

@ViewChild('content') htmlData:ElementRef;

 public categoria: Categoria;

 lista: Categoria[];
 search: String;

  constructor(private service: CategoriaService, private excelService: ExcelService, private router:Router) {
    this.categoria = new Categoria();
   }

  ngOnInit(): void {
    this.scrollToBottom();
    this.getCategorias();
  }

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
}

getCategorias(){
  this.service.getCategorias().subscribe(res => {
    console.log(res);
    this.lista = res as Categoria[];
  });
}

  // tslint:disable-next-line:typedef
  addCategoria(form: NgForm){
    console.log(form.value);
    this.service.postCategoria(form.value).subscribe(arg =>
      {
        this.getCategorias();
        console.log(arg);
        form.reset();
      }
      );
  }

  editCategoria(value,form:NgForm)  {
    console.log(`hola ${form}`);

    this.categoria = value as Categoria;

    console.log(this.categoria );

    this.service.putCategoria(this.categoria).subscribe(res=>{
      form.reset();
      console.log(res);
      this.getCategorias();
      this.categoria = new Categoria();

     });

  }

  saveCategoria(value){
    this.categoria = value as  Categoria;
  }

  downloadPdf(){
    let DATA = this.htmlData.nativeElement;

    let doc = new jsPDF('p', 'pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };

    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }

  downloadExcel(){
      this.excelService.exportToExcel(this.lista, 'categorias');
  }
  goToGestionar(categoriaSelecionada){
      let navigationExtras:NavigationExtras = {
      queryParams: {
        "categoria": "gdf"
      }
    };
    this.router.navigate(['platillos'], navigationExtras);
  }

}

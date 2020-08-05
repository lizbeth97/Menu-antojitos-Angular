import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import * as jsPDF from 'jspdf';

import { Platillo } from '../../module/platillo';
import {ExcelService} from './../../services/excel.service';
import { PlatilloService } from './../../services/platillo.service';
@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {

  @ViewChild('content') htmlData:ElementRef;

 public platillo: Platillo;

 platillos: Platillo[];
 search: String;

  constructor(private service: PlatilloService,
    private excelService: ExcelService,
    private route: ActivatedRoute) {

    this.platillo = new Platillo();
     this.getPlatillos();
   }

  ngOnInit(): void {
  }


  getPlatillos(){

    this.service.getPlatillos().subscribe(res => {
      this.platillos = res as Platillo[];
    });
  }

  addPlatillo(form: NgForm)
  {
      console.log(form.value);
      this.service.postPlatillo(form.value).subscribe(arg =>
        {
          this.getPlatillos();
          console.log(arg);
          form.reset();
        });

  }

  editPlatillo(value, form: NgForm){
    this.platillo = value as Platillo;
    console.log(this.platillo);

    this.service.putPlatillo(this.platillo).subscribe(res=>{
     form.reset();
     console.log(res);
     this.getPlatillos();
     this.platillo = new Platillo();
    });
  }

  platillosEdit(value)
  {
    console.log(value);
    this.platillo = value as Platillo;
  }

  exportExcel(){
    this.excelService.exportToExcel(this.platillos, 'platillos');
  }

  exportPdf(){
    let DATA = this.htmlData.nativeElement;

    let doc = new jsPDF('p','pt', 'a4');

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

}

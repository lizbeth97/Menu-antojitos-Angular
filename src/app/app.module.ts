import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriaFilterPipe } from './pipe/categoria-filter.pipe';
import { PlatilloFilterPipe } from './pipe/platillo-filter.pipe';
import { ExcelService } from './services/excel.service';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PlatillosComponent } from './components/platillos/platillos.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    PlatillosComponent,
    CategoriaFilterPipe,
    PlatilloFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

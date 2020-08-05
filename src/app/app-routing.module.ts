import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { PlatillosComponent } from './components/platillos/platillos.component';

const routes: Routes = [
  {path: 'categoria' , component: CategoriasComponent },
  {path: 'platillos' , component: PlatillosComponent },
  {path: '**' , pathMatch: 'full' , redirectTo: 'categoria' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

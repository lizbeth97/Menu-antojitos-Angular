import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Categoria } from '../module/categoria';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  getCategorias(): Observable<Categoria[]>
  {
    return this.http.get<Categoria[]>(`${this.url}/categoria`);
  }

  postCategoria(categoria: Categoria){
    return this.http.post(`${this.url}/categoria`, categoria);
  }

  putCategoria(categoria: Categoria){
    return this.http.put(`${this.url}/categoria/${categoria._id}`, categoria);
  }

}

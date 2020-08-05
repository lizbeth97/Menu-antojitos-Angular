import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Platillo } from '../module/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  getPlatillos(): Observable<Platillo[]>
  {
    return this.http.get<Platillo[]>(`${this.url}/platillo`);
  }

  postPlatillo(platillo: Platillo)
  {
    return this.http.post(`${this.url}/platillo`, platillo);
  }

  putPlatillo(platillo: Platillo){
    return this.http.put(`${this.url}/platillo/${platillo._id}`, platillo);
  }

  getPlatillosCategoria(platillo: Platillo): Observable<Platillo[]>{
    return this.http.get<Platillo[]>(`${this.url}/platillo/${platillo.idCategoria}, platillo`);
  }
}

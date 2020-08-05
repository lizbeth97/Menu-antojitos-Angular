import { PipeTransform, Pipe } from '@angular/core';

import { Categoria } from '../module/categoria';

@Pipe({
  name: 'categoriaFilter'
})
export class CategoriaFilterPipe implements PipeTransform{
  transform(categorias: Categoria[], search: String): Categoria[]{
    if(!categorias || !search){
      return categorias;
    }
    return categorias.filter(categoria =>
      categoria.strNombre.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }
}

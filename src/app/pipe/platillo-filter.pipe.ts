import { PipeTransform, Pipe } from '@angular/core';

import { Platillo } from './../module/platillo';

@Pipe({
  name: 'platilloFilter'
})
export class PlatilloFilterPipe implements PipeTransform{
  transform(platillos: Platillo[], search: String): Platillo[]{
    if(!platillos || !search){
      return platillos;
    }
    return platillos.filter(platillo =>
      platillo.strNombre.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  }
}

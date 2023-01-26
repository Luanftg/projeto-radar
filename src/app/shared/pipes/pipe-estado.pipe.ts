import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeEstado'
})
export class PipeEstadoPipe implements PipeTransform {

  transform(value: string){
    let estadoPipe = value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\s/g, '')
    return estadoPipe;
  }

}

import { AbstractControl, FormGroup } from '@angular/forms';


export interface ILojasForm extends FormGroup{
  value:ILojas;
  controls: {
  nome: AbstractControl,
  funcao: AbstractControl,
  descricao: AbstractControl,
}
}

export interface ILojas {
    nome: string,
    funcao: string,
    descricao: string,
    
}
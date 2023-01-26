import { AbstractControl, FormGroup } from "@angular/forms";

export interface ICampanhaForm extends FormGroup{
  value: ICampanha;
  controls: {
    id: AbstractControl,
    lojaId: AbstractControl,
    nome: AbstractControl,
    descricao: AbstractControl,
    dtCriacao: AbstractControl,
    photoUrl: AbstractControl,
  }
}

 export interface ICampanha {
  id: number,
  lojaId: number,
  nome: string,
  descricao: string,
  dtCriacao: Date,
  photoUrl: string,
}

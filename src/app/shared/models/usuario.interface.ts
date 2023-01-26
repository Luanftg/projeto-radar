import { AbstractControl, FormGroup } from "@angular/forms";

export interface IUsuarioForm extends FormGroup{
  value: IUsuario;
  controls: {
    id: AbstractControl,
    nome: AbstractControl,
    regra: AbstractControl,
    email: AbstractControl,
    senha: AbstractControl
  }
}

 export interface IUsuario {
  id: number,
  nome: string,
  regra: string,
  email: string,
  senha: string
}

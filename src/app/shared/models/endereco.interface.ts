import { AbstractControl, FormGroup } from "@angular/forms";

export interface IEnderecoForm extends FormGroup{
  value: IEndereco;
  controls: {
    id: AbstractControl,
    cep: AbstractControl,
    logradouro:AbstractControl,
    numero: AbstractControl,
    bairro:AbstractControl,
    cidade: AbstractControl,
    estado: AbstractControl,
    complemento: AbstractControl
  }
}

 export interface IEndereco {
  id: number,
  cep: string,
  logradouro:string,
  numero: string,
  bairro:string,
  cidade: string,
  estado: string,
  complemento: string
}

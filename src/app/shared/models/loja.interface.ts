import { AbstractControl, FormGroup } from "@angular/forms";

export interface ILojaForm extends FormGroup{
  value: ILoja;
  controls: {
    id: AbstractControl,
    nome: AbstractControl,
    cep: AbstractControl,
    logradouro:AbstractControl,
    numero: AbstractControl,
    bairro:AbstractControl,
    cidade: AbstractControl,
    estado: AbstractControl,
    complemento: AbstractControl
  }
}

 export interface ILoja {
  id: number,
  nome: string,
  cep: string,
  logradouro:string,
  numero: string,
  bairro:string,
  cidade: string,
  estado: string,
  complemento: string,
  enderecoId?:number
}

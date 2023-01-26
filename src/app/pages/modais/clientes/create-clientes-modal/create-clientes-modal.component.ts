import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import cep from 'cep-promise';
import { take } from 'rxjs';
import { IClienteForm } from 'src/app/shared/models/cliente.interface';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { verificaCPF } from 'src/app/shared/Utils/verificaCPF';

@Component({
  selector: 'app-create-clientes-modal',
  templateUrl: './create-clientes-modal.component.html',
  styleUrls: ['./create-clientes-modal.component.css']
})
export class CreateClientesModalComponent {
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public request:ClientesRequestService,
  ) { }
  listaEstados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
]
clienteForm :IClienteForm = this.fb.group({
  id: [0],
  nome: ['' , [Validators.required, Validators.minLength(3)]],
  telefone: [''],
  email: ['', [Validators.required, Validators.email]],
  cpf: [''],
  cep: [''],
  logradouro:[''],
  numero: [''],
  bairro:[''],
  cidade: [''],
  estado: ['' , Validators.required],
  complemento: ['']
}) as IClienteForm
create(){
  let mes=verificaCPF(this.clienteForm.value.cpf.toString())
  if(mes==""){
    this.request.postCliente(this.clienteForm.value, this.activeModal)
  }else{
    alert(mes);
  }
}
buscaCEP() {
  cep(this.clienteForm.value.cep)
    .then(res =>
      this.clienteForm.patchValue({
        logradouro: res.street,
        bairro: res.neighborhood,
        cidade: res.city,
        estado: res.state
      }))
}
}

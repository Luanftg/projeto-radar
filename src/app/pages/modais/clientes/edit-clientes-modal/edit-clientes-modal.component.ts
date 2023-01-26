import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import cep from 'cep-promise';
import { take } from 'rxjs';
import { IClienteForm } from 'src/app/shared/models/cliente.interface';
import { IClientePost } from 'src/app/shared/models/clientePost.interface';
import { IEndereco } from 'src/app/shared/models/endereco.interface';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { EnderecoRequestService } from 'src/app/shared/request/endereco.service';
import { verificaCPF } from 'src/app/shared/Utils/verificaCPF';

@Component({
  selector: 'app-edit-clientes-modal',
  templateUrl: './edit-clientes-modal.component.html',
  styleUrls: ['./edit-clientes-modal.component.css']
})
export class EditClientesModalComponent {
  @Input() clienteForm!:IClienteForm;
  @Input() enderecoId!:number;
  constructor(
    public activeModal: NgbActiveModal,
    public clienteRequest:ClientesRequestService,
    public endRequest:EnderecoRequestService,
  ) { }
  edit(){
    let cliente = {
      id: this.clienteForm.value.id,
      nome: this.clienteForm.value.nome,
      enderecoId: this.enderecoId,
      telefone: this.clienteForm.value.telefone.toString(),
      email: this.clienteForm.value.email,
      cpf: this.clienteForm.value.cpf,
    } as IClientePost;
    
    let mes=verificaCPF(this.clienteForm.value.cpf.toString())
    if(mes==""){
    this.clienteRequest.updateCliente(cliente)
    .pipe(take(1))
    .subscribe()
    let endereco = {
      ...this.clienteForm.value,
      id: this.enderecoId,
    } as IEndereco;
    this.endRequest.updateEndereco(endereco)
    .pipe(take(1))
    .subscribe()
    this.activeModal.dismiss();
    setTimeout(function () {
      window.location.replace("clientes"); //will redirect to your blog page (an ex: blog.html)
   }, 500);}
   else {
    alert(mes)
   }
  }
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

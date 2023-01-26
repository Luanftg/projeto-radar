import { AuthService } from './../../shared/auth/auth.service';
import { ICliente, IClienteForm } from 'src/app/shared/models/cliente.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewClientesModalComponent } from '../modais/clientes/view-clientes-modal/view-clientes-modal.component';
import { CreateClientesModalComponent } from '../modais/clientes/create-clientes-modal/create-clientes-modal.component';
import { EditClientesModalComponent } from '../modais/clientes/edit-clientes-modal/edit-clientes-modal.component';
import { DeleteClientesModalComponent } from '../modais/clientes/delete-clientes-modal/delete-clientes-modal.component';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { EnderecoRequestService } from 'src/app/shared/request/endereco.service';
import { IClientePost } from 'src/app/shared/models/clientePost.interface';
import { IEndereco } from 'src/app/shared/models/endereco.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  
  termoBuscar: string = "";
  clientes: ICliente[] = []

  constructor(
    private fb: FormBuilder,
    private request: ClientesRequestService,
    public auth: AuthService,
    private endRequest: EnderecoRequestService,
    private modalService: NgbModal
    ) { }

ngOnInit(): void {
  // Carrega a função getClientes ao iniciar o componente.
  this.getClientes()
}

// Função getClientes, que pega todos os clientes e carrega na variável clientes, declarada  no início da classe
getClientes(){
  this.request.getCliente().pipe(take(1)).subscribe(res=>{
    this.endRequest.getEndereco().pipe(take(1)).subscribe(response=>{
      let clientesPost = <IClientePost[]>res;
      let hashFindEnd = new Map<number,number>();
      let enderecos = <IEndereco[]>response;
      for (let i = 0; i < enderecos.length; i++) {
        const endereco = enderecos[i].id;
        hashFindEnd.set(endereco,i);
      }
      clientesPost.forEach(cliente=>{
        this.clientes.push({...enderecos[hashFindEnd.get(cliente.enderecoId||0)||0],...cliente})
      })
    })
  })
}


ViewCliente(cliente: ICliente){
  let clienteForm = this.fb.group({
    id: [cliente.id],
    nome: [cliente.nome],
    telefone: [ cliente.telefone],
    email: [cliente.email],
    cpf: [cliente.cpf],
    cep: [cliente.cep],
    logradouro: [cliente.logradouro],
    numero: [cliente.numero],
    bairro: [cliente.bairro],
    cidade: [cliente.cidade],
    estado: [cliente.estado],
    complemento: [cliente.complemento],
  }) as IClienteForm
  const modalRef = this.modalService.open(ViewClientesModalComponent);
  modalRef.componentInstance.clienteForm = clienteForm;
}

CreateCliente(){
  const modalRef = this.modalService.open(CreateClientesModalComponent);
  modalRef.dismissed.subscribe(()=>{
    this.clientes=[]
    this.getClientes();
  })
}


EditCliente(cliente: ICliente){
  let clienteForm = this.fb.group({
    id: [cliente.id],
    nome: [cliente.nome],
    telefone: [ cliente.telefone],
    email: [cliente.email],
    cpf: [cliente.cpf],
    cep: [cliente.cep],
    logradouro: [cliente.logradouro],
    numero: [cliente.numero],
    bairro: [cliente.bairro],
    cidade: [cliente.cidade],
    estado: [cliente.estado],
    complemento: [cliente.complemento],
  }) as IClienteForm
  const modalRef = this.modalService.open(EditClientesModalComponent);
  modalRef.componentInstance.clienteForm = clienteForm;
  modalRef.componentInstance.enderecoId = cliente.enderecoId;
  modalRef.dismissed.subscribe(()=>{
    this.clientes=[]
    this.getClientes();
  })
}

DeleteCliente(cliente: ICliente){
  const modalRef = this.modalService.open(DeleteClientesModalComponent);
  modalRef.componentInstance.cliente = cliente;
  modalRef.dismissed.subscribe(()=>{
    this.clientes=[]
    this.getClientes();
  })
}

}


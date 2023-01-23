import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IClienteForm } from 'src/app/shared/models/cliente.interface';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';

@Component({
  selector: 'app-edit-clientes-modal',
  templateUrl: './edit-clientes-modal.component.html',
  styleUrls: ['./edit-clientes-modal.component.css']
})
export class EditClientesModalComponent {
  @Input() clienteForm!:IClienteForm;
  constructor(
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
  edit(){
    this.request.updateCliente(this.clienteForm.value)
    .pipe(take(1))
    .subscribe()
    this.activeModal.dismiss();
    window.location.replace("/clientes");
  }
}

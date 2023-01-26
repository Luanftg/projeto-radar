import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IClienteForm } from 'src/app/shared/models/cliente.interface';

@Component({
  selector: 'app-view-clientes-modal',
  templateUrl: './view-clientes-modal.component.html',
  styleUrls: ['./view-clientes-modal.component.css']
})
export class ViewClientesModalComponent {
  @Input() clienteForm!:IClienteForm;
  constructor(
    public activeModal: NgbActiveModal,
  ) { }
}

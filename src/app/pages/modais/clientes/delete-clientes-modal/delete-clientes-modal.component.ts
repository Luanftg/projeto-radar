import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { ICliente } from 'src/app/shared/models/cliente.interface';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';

@Component({
  selector: 'app-delete-clientes-modal',
  templateUrl: './delete-clientes-modal.component.html',
  styleUrls: ['./delete-clientes-modal.component.css']
})
export class DeleteClientesModalComponent {
  @Input() cliente!:ICliente;
  constructor(
    private request: ClientesRequestService,
    public activeModal: NgbActiveModal,
  ) { }
  delete ():void{
    this.request.deleteCliente(this.cliente.id)
      .pipe(take(1))
      .subscribe()
    this.activeModal.dismiss();
    window.location.replace("/clientes");
  }
}

import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IPedido } from 'src/app/shared/models/pedido.interface';
import { PedidosRequestService } from 'src/app/shared/request/pedidos.service';

@Component({
  selector: 'app-delete-pedidos-modal',
  templateUrl: './delete-pedidos-modal.component.html',
  styleUrls: ['./delete-pedidos-modal.component.css']
})
export class DeletePedidosModalComponent {
  @Input() pedido!:IPedido;
  constructor(
    private request: PedidosRequestService,
    public activeModal: NgbActiveModal,
  ) { }
  delete ():void{
    this.request.deletePedido(this.pedido.id)
      .pipe(take(1))
      .subscribe(()=>
      this.activeModal.dismiss());
  }
}

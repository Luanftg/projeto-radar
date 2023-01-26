import { AuthService } from './../../shared/auth/auth.service';
import { PedidosRequestService } from 'src/app/shared/request/pedidos.service';
import { IPedido } from 'src/app/shared/models/pedido.interface';
import { Component, OnInit } from '@angular/core';
import { mergeMap, take, finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProdutosModalComponent } from '../modais/produtos/delete-produtos-modal/delete-produtos-modal.component';
import { PedidosProdutosRequestService } from 'src/app/shared/request/pedidosprodutos.service';
import { IPedidoProduto } from 'src/app/shared/models/pedido-produto.interface';
import { Carrinho } from 'src/app/services/Carrinho';
import { ICliente } from 'src/app/shared/models/cliente.interface';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { DeletePedidosModalComponent } from '../modais/pedidos/delete-pedidos-modal/delete-pedidos-modal.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    private pedidosRequest: PedidosRequestService,
    private pedidosProdutosRequest: PedidosProdutosRequestService,
    private clientesRequest: ClientesRequestService,
    public auth: AuthService,
    private modalService: NgbModal,) {
    
  }

  ngOnInit(): void {
    this.carregarPedidos()

  }
  clientes:ICliente[]=[];
  hashFindCliente:Map<number,number>=new Map<number,number>();

  termoBuscar: string = "";
  pedidos: IPedido[] = []

  carregarPedidos() {
    this.pedidosRequest.getPedido()
      .pipe(
        take(1), // O take fará com que a gente se DESINSCREVA após o SUBSCRIBE. Quando isso for resolvido 1 vez, vamos se desinscrever.
      )
      .subscribe(
        (response: any) => {
          this.pedidos = <IPedido[]>response
        }
      )
    
    this.clientesRequest.getCliente().pipe(take(1))
    .subscribe(res=>{
      this.clientes=<ICliente[]>res;
      for (let i = 0; i < this.clientes.length; i++) {
        const clienteId = this.clientes[i].id;
        this.hashFindCliente.set(clienteId,i);
      }
    })
  }

  getClienteById(id:number){
    let index = this.hashFindCliente.get(id);

    if(index||index==0){
      return this.clientes[index];
    }
    return {} as ICliente;
  }

  deletePedido(pedido: IPedido){
    const modalRef = this.modalService.open(DeletePedidosModalComponent);
    modalRef.componentInstance.pedido = pedido;
  }
  viewPedido(pedido:IPedido){
    const modalRef = this.modalService.open(DeleteProdutosModalComponent);
    modalRef.componentInstance.pedido = pedido;
    modalRef.componentInstance.cliente = this.getClienteById(pedido.clienteId);
  }
  editPedido(pedido:IPedido){
    this.pedidosProdutosRequest.getPedidoProduto()
      .pipe(take(1))
      .subscribe(list => {
        let pedidosProdutos = <IPedidoProduto[]>list;
        Carrinho.setCarrinho(pedido,pedidosProdutos.filter(value=>value.pedidoId===pedido.id))
      })
  }
}

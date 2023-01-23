import { FormGroup, AbstractControl } from '@angular/forms';
// Pedidos (id, cliente_id, valor_total, data)
// PedidosProdutos (id, pedido_id, produto_id, valor, quantidade)


export interface IPedidoProduto{
  id:number,
  pedidoId:number,
  produtoId:number,
  valor:number,
  quantidade:number
}

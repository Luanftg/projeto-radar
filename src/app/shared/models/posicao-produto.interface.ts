import { FormGroup, AbstractControl } from '@angular/forms';
// Pedidos (id, cliente_id, valor_total, data)
// PedidosProdutos (id, pedido_id, produto_id, valor, quantidade)

export interface IPosicaoProduto{
  id:number,
  campanhaId:number,
  produtoId:number,
  posicaoX:number,
  posicaoY:number
}

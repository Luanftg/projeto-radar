import { ChartConfiguration, registerables } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { take, tap } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';
import { PedidosRequestService } from 'src/app/shared/request/pedidos.service';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { IPedido } from 'src/app/shared/models/pedido.interface';

@Component({
  selector: 'app-fluxo-clientes',
  templateUrl: './fluxo-clientes.component.html',
  styleUrls: ['./fluxo-clientes.component.css']
})
export class FluxoClientesComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  fluxoAno = "";

  fluxo= [0,0,0,0,0,0,0,0,0,0,0,0]

  constructor(private clienteReq: ClientesRequestService,
    private produtoReq: ProdutosRequestService,
    private pedidoReq: PedidosRequestService,) { }

  ngOnInit(): void {
    const dataInicial = new Date()
    this.chamaApiClientes()
    this.chamaApiProduto()
    this.fluxoPedidoClienteApi(dataInicial.getFullYear().toString())
  }

  clientes: number = 0
  produtos: number = 0

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    datasets: [
      {
        data: [
          this.fluxo[0],
          this.fluxo[1],
          this.fluxo[2],
          this.fluxo[3],
          this.fluxo[4],
          this.fluxo[5],
          this.fluxo[6],
          this.fluxo[7],
          this.fluxo[8],
          this.fluxo[9],
          this.fluxo[10],
          this.fluxo[11],
        ],
        label: 'Nº de Pedidos por Mês',
        barThickness: 20,
        borderColor: 'rgb(0,105,0)',
        backgroundColor: 'rgba(0,105,0,0.7)',
        hoverBorderColor: 'rgb(155,255,0)',
        hoverBackgroundColor: 'rgba(155,255,0,0.7)',
      },
    ]
  }

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };

  public barChartLegend = true;

  public barChartColors = [{
    backgroundColor: '#3f80ea',
    borderColor: '#3f80ea',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    borderWidth: 3
  }]

  chamaApiClientes() {
    this.clienteReq.getCliente()
      .pipe(take(1))
      .subscribe(res => this.quantidadeClientes(res))
  }

  chamaApiProduto() {
    this.produtoReq.getProduto()
      .pipe(take(1))
      .subscribe(res => this.quantidadeProduto(res))
  }

  fluxoPedidoClienteApi(ano: string) {
    this.fluxoAno = ano;

    this.pedidoReq.getPedido()
      .pipe(take(1))
      .subscribe(res => this.filtraPorMes(<IPedido[]>res, this.fluxoAno))
  }

  quantidadeClientes(res: any) {
    this.clientes = res.length
  }

  quantidadeProduto(res: any) {
    this.produtos = res.length
  }

  filtraPorMes(arr: IPedido[], ano: string) {
    for (let i = 0; i < arr.length; i++) {
      let data = new Date(arr[i].dtCriacao)
      if(data.getFullYear()==Number(ano)){
        let mes = data.getMonth()
        this.fluxo[mes] += 1
        this.barChartData.datasets[0].data[mes] = this.fluxo[mes]
      }
    }
    this.chart?.update()
  }

}

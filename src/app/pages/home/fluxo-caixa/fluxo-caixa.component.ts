import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize, take, tap } from 'rxjs';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';
import { PedidosRequestService } from 'src/app/shared/request/pedidos.service';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IPedido } from 'src/app/shared/models/pedido.interface';


@Component({
  selector: 'app-fluxo-caixa',
  templateUrl: './fluxo-caixa.component.html',
  styleUrls: ['./fluxo-caixa.component.css'],
  providers: [DatePipe]
})
export class FluxoCaixaComponent implements OnInit {

  dateInicial = new Date()

  constructor(
    private clienteReq: ClientesRequestService,
    private produtoReq: ProdutosRequestService,
    private pedidoReq: PedidosRequestService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.chamaApiProduto()
    this.chamaApiClientes()
    this.fluxoPedidoClienteApi()
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  fluxo=[0,0,0,0,0,0,0,0,0,0,0,0]

  meses = this.fluxo

  totalAnual = 0
  dateSelected = this.datePipe.transform(new Date(), "yyyy-MM-dd") as string
  valorDiario: number = 0
  valorMes: number = 0

  lineChartData: ChartConfiguration<'line'>['data'] = {
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
        label: 'Toggle Fluxo',
        fill: false,
        tension: .5,
        borderColor: 'black',
        backgroundColor: 'black',
        pointRadius: 5
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  lineChartLegend = false;

  objetoApi: IPedido[]=[]

  fluxoPedidoClienteApi() {

    this.pedidoReq.getPedido()
      .pipe(
        take(1),
        tap(res => {this.objetoApi = <IPedido[]>res;}))
      .subscribe(res => {
        this.filtraPorMes(<IPedido[]>res);
      })
  }

  filtraPorMes(arr: IPedido[]) {
    let total=0.0;
    for (let i = 0; i < arr.length; i++) {
      total+=arr[i].valorTotal
      let mes = (new Date(arr[i].dtCriacao)).getMonth();
      this.fluxo[mes] += arr[i].valorTotal
      this.lineChartData.datasets[0].data[mes] = this.fluxo[mes]
    }

    this.totalAnual = total
    this.comparaDia()
    this.chart?.update()
  }

  comparaDia() {
    this.comparaMes()
    let receitaDia = 0
    for (let i = 0; i < this.objetoApi.length; i++) {
      this.objetoApi[i].dtCriacao.getDay()
      let dataAtual = 
      this.objetoApi[i].dtCriacao.getFullYear().toString()+"-"+
      (this.objetoApi[i].dtCriacao.getMonth()+1).toString() + "-"+
      this.objetoApi[i].dtCriacao.getDay().toString()
      if(this.dateSelected==dataAtual){
        receitaDia += this.objetoApi[i].valorTotal
        this.valorDiario = receitaDia
      }
    }
    if(receitaDia == 0){
      this.valorDiario = 0
    }

  }

  comparaMes() {
      let mes = Number(this.dateSelected.toString().slice(5, -3));
      this.valorMes = this.fluxo[mes-1]
  }

  clientes: number = 0
  produtos: number = 0

  quantidadeClientes(res: any) {
    this.clientes = res.length
  }

  quantidadeProduto(res: any) {
    this.produtos = res.length
  }

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


}

import { take } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { BaseChartDirective } from 'ng2-charts';
import { ICliente } from 'src/app/shared/models/cliente.interface';
import { IClientePost } from 'src/app/shared/models/clientePost.interface';
import { IEndereco } from 'src/app/shared/models/endereco.interface';
import { EnderecoRequestService } from 'src/app/shared/request/endereco.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-fluxo-estado',
  templateUrl: './fluxo-estado.component.html',
  styleUrls: ['./fluxo-estado.component.css']
})
export class FluxoEstadoComponent implements OnInit {



  constructor(
    private req: ClientesRequestService,
    private endReq:EnderecoRequestService
  ) { }

  ngOnInit(): void {
    this.popular()
    this.getClienteEstado()
  }

  @ViewChild('tabela') list?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  public pieChartLabels:string[] = [] ;

  public pieChartDatasets = [ {
    data: [] as number[]
  } ];
  public pieChartLegend = false;
  public pieChartPlugins = [];

  getClienteEstado(){
    this.req.getCliente()
    .pipe(take(1))
    .subscribe( res =>{
      this.endReq.getEndereco().pipe(take(1))
      .subscribe( res2=>this.verificaEstado
        (<IClientePost[]>res,<IEndereco[]>res2)
    )})
  }

  listaEstadoExistente: string[] = []
  verificaEstado(res:IClientePost[], end:IEndereco[]){
    let hashFindEstado = new Map<string,number>()
    let hashFindEndereco = new Map<number,number>()
    for (let i = 0; i < end.length; i++) {
      hashFindEndereco.set(end[i].id,i);
    }
    let lista:number[]=[];
    let listaNome:string[]=[];
    for (let i = 0; i < res.length; i++) {
      let estado = end[hashFindEndereco.get(res[i]?.enderecoId||0)||0].estado
      let id = hashFindEstado.get(estado)||0
      if(id){
        lista[id]++
      }else{
        lista.push(1);
        let nomeEstado=this.nomeEstado.get(estado)||estado
        listaNome.push(nomeEstado);
        hashFindEstado.set(estado, listaNome.length-1);
      }
    }
    this.pieChartDatasets[0].data=lista
    this.pieChartLabels=listaNome.sort();
    this.listaEstadoExistente=listaNome;
    this.chart?.update();
  }

  popular(){
    this.nomeEstado.set("AC","Acre")
    this.nomeEstado.set("AL","Alagoas")
    this.nomeEstado.set("AP","Amapá")
    this.nomeEstado.set("AM","Amazonas")
    this.nomeEstado.set("BA","Bahia")
    this.nomeEstado.set("CE","Ceará")
    this.nomeEstado.set("DF","Distrito Federal")
    this.nomeEstado.set("ES","Espírito Santo")
    this.nomeEstado.set("GO","Goiás")
    this.nomeEstado.set("MA","Maranhão")
    this.nomeEstado.set("MT","Mato Grosso")
    this.nomeEstado.set("MS","Mato Grosso do Sul")
    this.nomeEstado.set("MG","Minas Gerais")
    this.nomeEstado.set("PA","Pará")
    this.nomeEstado.set("PB","Paraíba")
    this.nomeEstado.set("PR","Paraná")
    this.nomeEstado.set("PE","Pernambuco")
    this.nomeEstado.set("PI","Piauí")
    this.nomeEstado.set("RJ","Rio de Janeiro")
    this.nomeEstado.set("RN","Rio Grande do Norte")
    this.nomeEstado.set("RS","Rio Grande do Sul")
    this.nomeEstado.set("RO","Rondônia")
    this.nomeEstado.set("RR","Roraima")
    this.nomeEstado.set("SC","Santa Catarina")
    this.nomeEstado.set("SP","São Paulo")
    this.nomeEstado.set("SE","Sergipe")
    this.nomeEstado.set("TO","Tocantins")
  }
  nomeEstado = new Map<string,string>()
}

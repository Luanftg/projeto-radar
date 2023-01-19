import { FluxoClientesComponent } from './home/fluxo-clientes/fluxo-clientes.component';
import { FluxoCaixaComponent } from './home/fluxo-caixa/fluxo-caixa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { ProdutosComponent } from '../pages/produtos/produtos.component';
import { ClientesComponent } from '../pages/clientes/clientes.component';
import { PedidosComponent } from '../pages/pedidos/pedido/pedidos.component';
import { ProdutoPedidoComponent } from '../pages/pedidos/pedido-produto/produto-pedido.component';
import { PedidosClientesComponent } from '../pages/pedidos/pedidos-clientes/pedidos-clientes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormatarTelefonePipe } from '../shared/pipes/formatar-telefone.pipe';
import { FormatarCpfPipe } from '../shared/pipes/formatar-cpf.pipe';
import { NgChartsModule } from 'ng2-charts';
import { FluxoEstadoComponent } from './home/fluxo-estado/fluxo-estado.component';
import { PipeEstadoPipe } from './clientes/pipe-estado.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PrateleiraComponent } from './prateleira/prateleira.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProdutosComponent,
    ClientesComponent,
    PedidosComponent,
    ProdutoPedidoComponent,
    PedidosClientesComponent,
    LoginComponent,
    NotFoundComponent,
    FormatarTelefonePipe,
    FormatarCpfPipe,
    FluxoCaixaComponent,
    FluxoClientesComponent,
    FluxoEstadoComponent,
    PipeEstadoPipe,
    PrateleiraComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule,
    DragDropModule,
    MatPaginatorModule
  ],
  exports: [
    HomeComponent,
    ProdutosComponent,
    ClientesComponent,
    PedidosComponent,
    ProdutoPedidoComponent,
    PedidosClientesComponent,
    LoginComponent,
    FluxoCaixaComponent,
    FluxoClientesComponent,
  ]
})
export class PagesModule { }

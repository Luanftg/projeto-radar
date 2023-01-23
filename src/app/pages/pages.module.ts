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
import { PedidosComponent } from '../pages/pedidos/pedidos.component';
import { CampanhasComponent } from './campanhas/campanhas.component';
import { LojasComponent } from '../pages/lojas/lojas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormatarTelefonePipe } from '../shared/pipes/formatar-telefone.pipe';
import { FormatarCpfPipe } from '../shared/pipes/formatar-cpf.pipe';
import { NgChartsModule } from 'ng2-charts';
import { FluxoEstadoComponent } from './home/fluxo-estado/fluxo-estado.component';
import { PipeEstadoPipe } from './clientes/pipe-estado.pipe';
import { CreateProdutosModalComponent } from './modais/produtos/create-produtos-modal/create-produtos-modal.component';
import { ViewProdutosModalComponent } from './modais/produtos/view-produtos-modal/view-produtos-modal.component';
import { EditProdutosModalComponent } from './modais/produtos/edit-produtos-modal/edit-produtos-modal.component';
import { DeleteProdutosModalComponent } from './modais/produtos/delete-produtos-modal/delete-produtos-modal.component';
import { DeleteClientesModalComponent } from './modais/clientes/delete-clientes-modal/delete-clientes-modal.component';
import { CreateClientesModalComponent } from './modais/clientes/create-clientes-modal/create-clientes-modal.component';
import { ViewClientesModalComponent } from './modais/clientes/view-clientes-modal/view-clientes-modal.component';
import { EditClientesModalComponent } from './modais/clientes/edit-clientes-modal/edit-clientes-modal.component';
import { ViewPedidosModalComponent } from './modais/pedidos/view-pedidos-modal/view-pedidos-modal.component';
import { DeletePedidosModalComponent } from './modais/pedidos/delete-pedidos-modal/delete-pedidos-modal.component';
import { DeleteLojasModalComponent } from './modais/lojas/delete-lojas-modal/delete-lojas-modal.component';
import { CreateLojasModalComponent } from './modais/lojas/create-lojas-modal/create-lojas-modal.component';
import { ViewLojasModalComponent } from './modais/lojas/view-lojas-modal/view-lojas-modal.component';
import { EditLojasModalComponent } from './modais/lojas/edit-lojas-modal/edit-lojas-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrateleiraComponent } from './prateleira/prateleira.component';
import { SavePrateleiraModalComponent } from './modais/prateleira/save-prateleira-modal.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    CarrinhoComponent,
    HomeComponent,
    ProdutosComponent,
    ClientesComponent,
    // LojasComponent,
    PedidosComponent,
    LoginComponent,
    NotFoundComponent,
    FormatarTelefonePipe,
    FormatarCpfPipe,
    FluxoCaixaComponent,
    FluxoClientesComponent,
    FluxoEstadoComponent,
    PipeEstadoPipe,
    CreateProdutosModalComponent,
    ViewProdutosModalComponent,
    EditProdutosModalComponent,
    DeleteProdutosModalComponent,
    DeleteClientesModalComponent,
    CreateClientesModalComponent,
    ViewClientesModalComponent,
    EditClientesModalComponent,
    ViewPedidosModalComponent,
    DeletePedidosModalComponent,
    DeleteLojasModalComponent,
    CreateLojasModalComponent,
    ViewLojasModalComponent,
    EditLojasModalComponent,
    PrateleiraComponent,
    CampanhasComponent,
    SavePrateleiraModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule,
    DragDropModule
  ],
  exports: [
    HomeComponent,
    ProdutosComponent,
    ClientesComponent,
    PedidosComponent,
    LoginComponent,
    FluxoCaixaComponent,
    FluxoClientesComponent,
  ]
})
export class PagesModule { }

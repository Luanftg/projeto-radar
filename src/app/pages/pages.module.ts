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
import { FormatarCepPipe } from '../shared/pipes/formatar-cep.pipe';
import { NgChartsModule } from 'ng2-charts';
import { FluxoEstadoComponent } from './home/fluxo-estado/fluxo-estado.component';
import { PipeEstadoPipe } from '../shared/pipes/pipe-estado.pipe';
import { CreateProdutosModalComponent } from './modais/produtos/create-produtos-modal/create-produtos-modal.component';
import { ViewProdutosModalComponent } from './modais/produtos/view-produtos-modal/view-produtos-modal.component';
import { EditProdutosModalComponent } from './modais/produtos/edit-produtos-modal/edit-produtos-modal.component';
import { DeleteProdutosModalComponent } from './modais/produtos/delete-produtos-modal/delete-produtos-modal.component';
import { DeleteClientesModalComponent } from './modais/clientes/delete-clientes-modal/delete-clientes-modal.component';
import { CreateClientesModalComponent } from './modais/clientes/create-clientes-modal/create-clientes-modal.component';
import { ViewClientesModalComponent } from './modais/clientes/view-clientes-modal/view-clientes-modal.component';
import { EditClientesModalComponent } from './modais/clientes/edit-clientes-modal/edit-clientes-modal.component';
import { DeletePedidosModalComponent } from './modais/pedidos/delete-pedidos-modal/delete-pedidos-modal.component';
import { DeleteLojasModalComponent } from './modais/lojas/delete-lojas-modal/delete-lojas-modal.component';
import { CreateLojasModalComponent } from './modais/lojas/create-lojas-modal/create-lojas-modal.component';
import { ViewLojasModalComponent } from './modais/lojas/view-lojas-modal/view-lojas-modal.component';
import { EditLojasModalComponent } from './modais/lojas/edit-lojas-modal/edit-lojas-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrateleiraComponent } from './prateleira/prateleira.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CreateCampanhaModalComponent } from './modais/campanhas/create-campanha-modal/create-campanha-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ViewUsuariosModalComponent } from './modais/usuarios/view-usuarios-modal/view-usuarios-modal.component';
import { CreateUsuariosModalComponent } from './modais/usuarios/create-usuarios-modal/create-usuarios-modal.component';
import { DeleteUsuariosModalComponent } from './modais/usuarios/delete-usuarios-modal/delete-usuarios-modal.component';
import { EditUsuariosModalComponent } from './modais/usuarios/edit-usuarios-modal/edit-usuarios-modal.component';

@NgModule({
  declarations: [
    CarrinhoComponent,
    HomeComponent,
    ProdutosComponent,
    ClientesComponent,
    LojasComponent,
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
    DeletePedidosModalComponent,
    DeleteLojasModalComponent,
    CreateLojasModalComponent,
    ViewLojasModalComponent,
    EditLojasModalComponent,
    PrateleiraComponent,
    CampanhasComponent,
    CreateCampanhaModalComponent,
    FormatarCepPipe,
    UsuariosComponent,
    ViewUsuariosModalComponent,
    CreateUsuariosModalComponent,
    DeleteUsuariosModalComponent,
    EditUsuariosModalComponent,
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
    Ng2SearchPipeModule
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

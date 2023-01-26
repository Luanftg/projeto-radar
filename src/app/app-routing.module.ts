import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { LojasComponent } from './pages/lojas/lojas.component';
import { PrateleiraComponent } from './pages/prateleira/prateleira.component';
import { CampanhasComponent } from './pages/campanhas/campanhas.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component:HomeComponent, canActivate: [EstaLogadoGuard]},
  {path:'produtos', component: ProdutosComponent, canActivate:[EstaLogadoGuard]},
  {path:'clientes', component: ClientesComponent, canActivate:[EstaLogadoGuard]},
  {path:'pedidos', component: PedidosComponent, canActivate:[EstaLogadoGuard]},
  {path:'lojas', component: LojasComponent, canActivate:[EstaLogadoGuard]},
  {path:'campanhas', component: CampanhasComponent, canActivate:[EstaLogadoGuard]},
  {path:'prateleira', component: PrateleiraComponent, canActivate:[EstaLogadoGuard]},
  {path:'carrinho', component: CarrinhoComponent, canActivate:[EstaLogadoGuard]},
  {path:'usuarios', component: UsuariosComponent, canActivate:[EstaLogadoGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

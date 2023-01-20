import { AuthService } from './../../shared/auth/auth.service';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { IProdutoForm } from '../../shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';
import { FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { take, tap } from 'rxjs';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private request: RequestService,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.getProduto()
  }

  id = -1;
  validador = true;
  listaProduto:IProduto[] = []

  produtoForm = this.fb.group ({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtd_estoque: [0]
  }) as IProdutoForm

  @ViewChild('tabela') list?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  cadastrarProduto(){
    this.request.postProduto(this.produtoForm.value)
    .subscribe()
    this.getProduto()
    this.resetForm()
  }

  editarProduto(){
    this.request.updateProduto(this.produtoForm.value)
    .pipe(take(1))
    .subscribe()
    this.id =-1;
    this.getProduto()
    this.resetForm()
  }

  getProduto(){
    this.request.getProduto()
    .pipe(take(1))
    .subscribe(res => this.listaProduto = <IProduto[]>res)
    this.listaProduto = [{id: 0,
      nome: 'teste',
      descricao: 'teste',
      valor: 0,
      qtd_estoque: 0}];
  }

  removeProduto(event:any){
    this.request.deleteProduto(event)
    .pipe(take(1))
    .subscribe()
    this.getProduto()
  }

  pushProduto(event:any){
    let produto = this.listaProduto[event];
    this.id=produto.id;
    this.produtoForm = this.fb.group ({
      id: [produto.id],
      nome: [produto.nome],
      descricao: [produto.descricao],
      valor: [produto.valor],
      qtd_estoque: [produto.qtd_estoque]
    }) as IProdutoForm
  }

  resetForm() {
    this.produtoForm.reset();
  }
}

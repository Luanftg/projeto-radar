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

  validador = true;
  listaProduto:IProduto[] = []

  produtoForm = this.fb.group ({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtdEstoque: [0],
    photoUrl: ['']
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

  getProduto(){
    this.request.getProduto()
    .pipe(take(1))
    .subscribe(res => this.listaProduto = <IProduto[]>res)
  }

  removeProduto(event:any){
    this.request.deleteProduto(event)
    .pipe(take(1))
    .subscribe()
    this.getProduto()
  }

  resetForm() {
    this.produtoForm.reset();
  }
}

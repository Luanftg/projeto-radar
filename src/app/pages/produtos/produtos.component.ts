import { AuthService } from './../../shared/auth/auth.service';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { IProdutoForm } from '../../shared/models/produto.interface';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateProdutosModalComponent } from '../modais/produtos/create-produtos-modal/create-produtos-modal.component';
import { EditProdutosModalComponent } from '../modais/produtos/edit-produtos-modal/edit-produtos-modal.component';
import { DeleteProdutosModalComponent } from '../modais/produtos/delete-produtos-modal/delete-produtos-modal.component';
import { ViewProdutosModalComponent } from '../modais/produtos/view-produtos-modal/view-produtos-modal.component';
import { Carrinho } from 'src/app/services/Carrinho';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private request: ProdutosRequestService,
    private modalService: NgbModal,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.getProduto()
  }
  termoBuscar: string = "";
  public produtos:IProduto[] = []

  addProduto(produto:IProduto){
    Carrinho.adicionaPedidoProduto(produto);
  }

  getProduto() {
    this.request.getProduto()
      .pipe(take(1))
      .subscribe(list => {
        this.produtos = <IProduto[]>list;
      });
  }

  viewProduto(produto: IProduto){
    let produtoForm = this.fb.group({
      id: [produto.id],
      nome: [produto.nome],
      descricao: [produto.descricao],
      valor: [produto.valor],
      qtdEstoque: [produto.qtdEstoque],
      photoUrl: [produto.photoUrl] 
    }) as IProdutoForm
    const modalRef = this.modalService.open(ViewProdutosModalComponent);
    modalRef.componentInstance.produtoForm = produtoForm;
  }

  createProduto(){
    const modalRef = this.modalService.open(CreateProdutosModalComponent);
    modalRef.dismissed.subscribe(()=>{
      this.produtos=[]
      this.getProduto();
    })
  }

  
  editProduto(produto: IProduto){
    let produtoForm = this.fb.group({
      id: [produto.id],
      nome: [produto.nome],
      descricao: [produto.descricao],
      valor: [produto.valor],
      qtdEstoque: [produto.qtdEstoque],
      photoUrl: [produto.photoUrl]
    }) as IProdutoForm
    const modalRef = this.modalService.open(EditProdutosModalComponent);
    modalRef.componentInstance.produtoForm = produtoForm;
    modalRef.dismissed.subscribe(()=>{
      this.produtos=[]
      this.getProduto();
    })
  }
  
  deleteProduto(produto: IProduto){
    const modalRef = this.modalService.open(DeleteProdutosModalComponent);
    modalRef.componentInstance.produto = produto;
    modalRef.dismissed.subscribe(()=>{
      this.produtos=[]
      this.getProduto();
    })
  }

  
}
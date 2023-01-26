import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { Prateleira } from 'src/app/services/Prateleira';
import { IPosicaoProduto } from 'src/app/shared/models/posicao-produto.interface';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { PosicaoProdutoRequestService } from 'src/app/shared/request/posicoesprodutos.service';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';
import { CreateCampanhaModalComponent } from '../modais/campanhas/create-campanha-modal/create-campanha-modal.component';

var containerId:number | undefined;

@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.css']
})
export class PrateleiraComponent {
  estoque: IProduto[]=[];
  prateleiras: IProduto[][]=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
  numbers: number[] = [0,1,2,3,4] 
  constructor(private httpClient: HttpClient,
    private req:ProdutosRequestService,
    private reqPP:PosicaoProdutoRequestService,
    private modalService: NgbModal,) {
    this.getProdutos();
    this.popular();
    let produtoFalso = {} as IProduto
    produtoFalso.id=-1;
    produtoFalso.photoUrl=" ";
    produtoFalso.nome="Vazio"
    this.estoque.push(produtoFalso)
  }

   // Função responsável por buscar a lista de medicamentos na URL do Environment, que aponta para a api.
   getProdutos() {
    this.req.getProduto()
      .pipe(take(1))
      .subscribe(list => {
        let estoquePego = <IProduto[]>list;
        if(Prateleira.campanha.id){
          this.reqPP.getPosicoesProdutos().pipe(take(1)).subscribe(res=>{
            Prateleira.prateleira=(<IPosicaoProduto[]>res).filter(posicao=>posicao.campanhaId==Prateleira.campanha.id)
            let hashFindProduto = new Map<number,number>()
            for (let i = 0; i < Prateleira.prateleira.length; i++) {
              const produtoId = Prateleira.prateleira[i].produtoId;
              hashFindProduto.set(produtoId,i+1);
            }
            estoquePego.forEach(produto=>{
              if(!hashFindProduto.get(produto.id)){
                if(this.estoque.length==1&&this.estoque[0].id==-1){
                  this.estoque.pop()
                }
                this.estoque.push(produto);
              }else{
                this.prateleiras[Prateleira.prateleira[(hashFindProduto.get(produto.id)||1)-1].posicaoX]
                [Prateleira.prateleira[(hashFindProduto.get(produto.id)||1)-1].posicaoY]=produto;  
              }
            })
            
          });
        }else{
          if(estoquePego.length>1&&this.estoque[0].id==-1){
            this.estoque.pop()
          }
          this.estoque=estoquePego
        }
      })
  }

  // Função responsável pelo Drag and Drop
  drop(event: CdkDragDrop<IProduto[]>) {
    containerId = Number(event.container.id )
    if (event.previousContainer === event.container) {
      if(event.container.id=="0"){
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);//id do container onde o item foi dropado
      }else{
        this.moveItemInArray(Number.parseInt(event.container.id)-1, event.previousIndex, event.currentIndex)
      }
    } else  if((containerId!=0)||containerId===0){
      this.transferArrayItem(
        Number.parseInt(event.previousContainer.id),
        Number.parseInt(event.container.id),
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  popular(){
    let produtoFalso = {} as IProduto
    produtoFalso.id=-1;
    produtoFalso.photoUrl=" ";
    for (let i = 0; i < this.prateleiras.length; i++) {
      for (let j = 0; j < 4; j++) {
      this.prateleiras[i].push(produtoFalso);
      }
    }
  }

  clear(){
    let produtoFalso = {} as IProduto
    produtoFalso.id=-1;
    produtoFalso.photoUrl=" ";
    if(this.estoque[0].id==-1){
      this.estoque.pop()
    }
    for (let i = 0; i < this.prateleiras.length; i++) {
      for (let j = 0; j < this.prateleiras[i].length; j++) {
        if(this.prateleiras[i][j].id>-1){
          this.estoque.push(this.prateleiras[i][j])
          this.prateleiras[i][j]=produtoFalso
        }
      }
    }
  }


  moveItemInArray(id: number, previousIndex: number, currentIndex: number) {
    if(currentIndex==4){
      currentIndex--
    }
    let produto = this.prateleiras[id][previousIndex]
    this.prateleiras[id][previousIndex]=this.prateleiras[id][currentIndex]
    this.prateleiras[id][currentIndex]=produto
  }

  transferArrayItem(idPreviousContainer:number,idCurrentContainer:number,previousIndex: number, currentIndex: number){
    if(currentIndex==4){
      currentIndex--
    }
    let produtoFalso = {} as IProduto
        produtoFalso.id=-1;
        produtoFalso.photoUrl=" ";
    if(!idPreviousContainer){
      if(this.estoque[previousIndex].id!=-1){
        if(this.prateleiras[idCurrentContainer-1][currentIndex].id==-1){
          this.prateleiras[idCurrentContainer-1][currentIndex]=this.estoque[previousIndex];
          this.estoque.splice(previousIndex,1);
      }
      else{
        let produto = this.estoque[previousIndex]
        this.estoque[previousIndex]=this.prateleiras[idCurrentContainer-1][currentIndex]
        this.prateleiras[idCurrentContainer-1][currentIndex]=produto
      }
      if(this.estoque.length==0){
        produtoFalso.nome="Vazio"
        this.estoque.push(produtoFalso)
      }
    }
    } else if(!idCurrentContainer){
      if(this.prateleiras[idPreviousContainer-1][previousIndex].id!=-1){
        if(this.estoque[0].id==-1){
          this.estoque.pop()
        }
        this.estoque.push(this.prateleiras[idPreviousContainer-1][previousIndex])
        this.prateleiras[idPreviousContainer-1][previousIndex]=produtoFalso
      }
    }else{
      let produto = this.prateleiras[idPreviousContainer-1][previousIndex]
      this.prateleiras[idPreviousContainer-1][previousIndex]=this.prateleiras[idCurrentContainer-1][currentIndex]
      this.prateleiras[idCurrentContainer-1][currentIndex]=produto
    }
  }
  getText(texto:string){
    if(texto.length<15){
      return texto;
    }
    let text=texto.split(" ")[0];
    if(text.length<15){
      return text
    }
    return text.slice(0,14)
  }
  salvar() {
      for (let i = 0; i < 15; i++) {
        const elementos = this.prateleiras[i];
        for (let j = 0; j < elementos.length; j++) {
          const elemento = elementos[j];
            if(elemento.id>0){
            let posicaoX = i;//containerId
            let posicaoY = j;//indexContainer
            let produtoId = elemento["id"];
            Prateleira.prateleira.push({id:0, campanhaId:0, posicaoX, posicaoY, produtoId})
            }
        }
      }
      const modalRef= this.modalService.open(CreateCampanhaModalComponent);
  }
}

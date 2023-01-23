import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import html2canvas from 'html2canvas';
import { take } from 'rxjs';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';
import { SavePrateleiraModalComponent } from '../modais/prateleira/save-prateleira-modal.component';

var containerId:number | undefined;
var indexContainer:number;
var itemId:number;

@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.css']
})
export class PrateleiraComponent {
  estoque!: IProduto[];
  prateleiras: IProduto[][]=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

  constructor(private httpClient: HttpClient,
    private req:RequestService,
    private modalService: NgbModal,) {
    this.getProdutos()
  }

   // Função responsável por buscar a lista de medicamentos na URL do Environment, que aponta para a api.
   getProdutos() {
    this.req.getProduto()
      .pipe(take(1))
      .subscribe(list => {
        this.estoque = <IProduto[]>list;
      })
      console.log(this.estoque)
  }

  // Função responsável pelo Drag and Drop
  drop(event: CdkDragDrop<IProduto[]>) {
    containerId = Number(event.container.id )
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else  if((containerId!=0&&event.container.data.length<4)||containerId===0){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  salvar() {
    let prateleira=[];
    for (let i = 0; i < 15; i++) {
      const elementos = this.prateleiras[i];
      for (let j = 0; j < elementos.length; j++) {
        const elemento = elementos[j];
        let containerId = i;
        let indexContainer = j;
        let itemId = elemento["id"];
        prateleira.push({containerId, indexContainer, itemId})
        console.log(prateleira)
      }
    }
  }
}
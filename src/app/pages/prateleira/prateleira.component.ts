import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { RequestService } from 'src/app/shared/request/request.service';
import { take } from 'rxjs';

// Interface para Medicamento
export interface Medicamento {
  id: number;
  name: string;
  image: string;
  description: string;
}

var containerId:number | undefined;
var indexContainer:number;
var itemId:number;

@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.css']
})

export class PrateleiraComponent implements OnInit {

  estoque!: IProduto[];
  ngOnInit(): void {
  }
  prateleiras: IProduto[][]=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

  // Inicia a instância de getMedicamentos
  constructor(private httpClient: HttpClient,
    private req:RequestService) {
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
    console.log(event.container.data)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);//id do container onde o item foi dropado
      indexContainer = event.currentIndex //Index da posição do item dentro do container
      itemId = Number(event.container.data[event.currentIndex]['id']) //ID do item movid
      console.log(
        "ID do Container: " + containerId + ", Index do Container: " + indexContainer + ", ID do item: " + itemId
      )
    } else  if((containerId!=0&&event.container.data.length<4)||containerId===0){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.container)
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
        console.log(elemento)
      }
    }
    console.log(prateleira)
  }

  teste(item:any) {
    return JSON.stringify(item)
  }
}
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Interface para Medicamento
export interface Medicamento {
  id: string;
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

  estoque!: Medicamento[];
  ngOnInit(): void {
  }
  prateleiras: Medicamento[][]=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
  prateleira:any[] = [];

  // Inicia a instância de getMedicamentos
  constructor(private httpClient: HttpClient) {
    this.getMedicamentos()
  }

  // Função responsável por buscar a lista de medicamentos na URL do Environment, que aponta para a api.
  getMedicamentos() {
    this.httpClient.get<Medicamento[]>(environment.url + "medicamentos")
      .subscribe(list => {
        this.estoque = list;
      })
  }

  // Função responsável pelo Drag and Drop
  drop(event: CdkDragDrop<Medicamento[]>) {
    containerId = Number(event.container.id )
    
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
    }
  }
  
  salvar() {
    this.prateleira=[];
    for (let i = 0; i < 15; i++) {
      const elementos = this.prateleiras[i];
      for (let j = 0; j < elementos.length; j++) {
        const elemento = elementos[i];
        let containerId = i;
        let indexContainer = j;
        let itemId = elemento.id;
        this.prateleira.push({containerId, indexContainer, itemId})
      }
    }
    console.log(this.prateleira)
  }
}
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
  prateleira11: Medicamento[] = [];
  prateleira12: Medicamento[] = [];
  prateleira13: Medicamento[] = [];
  prateleira14: Medicamento[] = [];
  prateleira15: Medicamento[] = [];
  prateleira21: Medicamento[] = [];
  prateleira22: Medicamento[] = [];
  prateleira23: Medicamento[] = [];
  prateleira24: Medicamento[] = [];
  prateleira25: Medicamento[] = [];
  prateleira31: Medicamento[] = [];
  prateleira32: Medicamento[] = [];
  prateleira33: Medicamento[] = [];
  prateleira34: Medicamento[] = [];
  prateleira35: Medicamento[] = [];
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
      /* console.log(
        "ID do Container: " + containerId + ", Index do Container: " + indexContainer + ", ID do item: " + itemId
      ) */
      if(containerId != 0) this.prateleira.push({containerId, indexContainer, itemId})
    } else  if((containerId!=0&&event.container.data.length<4)||containerId===0){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      containerId = Number(event.container.id) //id do container onde o item foi dropado
      indexContainer = Number(event.currentIndex) //Index da posição do item dentro do container
      itemId = Number(event.container.data[event.currentIndex]['id']) //ID do item movid
    /*   console.log(
        "ID do Container: " + containerId + ", Index do Container: " + indexContainer + ", ID do item: " + itemId
      ) */
      if(containerId != 0) {
        let existe=false;
        for (let i = 0; i < this.prateleira.length; i++) {
          if(this.prateleira[i]["itemId"]===itemId){
            existe =true;
            this.prateleira[i]={containerId, indexContainer, itemId};
          }
          
        }
        if(!existe) this.prateleira.push({ containerId, indexContainer, itemId})
      }else{
        for (let i = 0; i < this.prateleira.length; i++) {
          if(this.prateleira[i]["itemId"]===itemId){
            this.prateleira.splice(i,1);
          }
        }
      }
    }
  }
  
  salvar() {
    console.log(this.prateleira)
    console.log("ContainerID é do tipo " + typeof this.prateleira[0].containerId)
    console.log("indexContainer é do tipo " + typeof this.prateleira[0].indexContainer)
    console.log("itemId é do tipo " + typeof this.prateleira[0].itemId)

  }
 
}
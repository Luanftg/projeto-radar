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
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else  {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(
        event.container.id, //id do container onde o item foi dropado
        event.currentIndex, //Index da posição do item dentro do container
        // event.item.element.nativeElement.id//Conteudo do item movido
        event.item.element.nativeElement.getAttribute('item.id'),
        
        // event.previousContainer.data[event.previousIndex]['id]
      )
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event.item.data.id);
  }
}

//CSS DO CÓDIGO ORIGINAL DO GUILHERME
/* 
export class DragAndDropComponent {
  lessons1 = [[
    {
      id: 120,
      'description': 'Item 1',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    }, {
      id: 122,
      'description': 'Item 2',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },
  ], [
    {
      id: 122,
      'description': 'Item 3',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },],
  [{
    id: 123,
    'description': 'Item 4',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 124,
    'description': 'Item 5',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 125,
    'description': 'Item 6',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },]]
  lessons2 = [[
    {
      id: 120,
      'description': 'Item 7',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    }, {
      id: 122,
      'description': 'Item 8',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },
  ], [
    {
      id: 122,
      'description': 'Item 9',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },],
  [{
    id: 123,
    'description': 'Item 10',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 124,
    'description': 'Item 11',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 125,
    'description': 'Item 12',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },]]
    ;
  colunas1 = [...Array(this.lessons1.length).keys()]//0,1,2,3
  get1(val: number) {
    if (val == 0) {
      return 2;
    }
    return val - 1;
  }
  colunas2 = [...Array(this.lessons2.length).keys()]//0,1,2,3
  get2(val: number) {
    if (val == 0) {
      return 2;
    }
    return val - 1;
  }
  drop(event: CdkDragDrop<ILesson[]>) {
    console.log(event.previousContainer.id);
    console.log(event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  newItems = ['Item 0', 'Item 1', 'Item 2', 'Item 3'];
  activeItems = ['Item 4'];
  doneItems = ['Item 5', 'Item 6', 'Item 7'];
}
 */

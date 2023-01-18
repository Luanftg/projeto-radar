import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.css']
})
export class PrateleiraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  estoque = estoqueLista();
  prateleira11: string[] = [];
  prateleira12: string[] = [];
  prateleira13: string[] = [];
  prateleira14: string[] = [];
  prateleira21: string[] = [];
  prateleira22: string[] = [];
  prateleira23: string[] = [];
  prateleira24: string[] = [];
  prateleira31: string[] = [];
  prateleira32: string[] = [];
  prateleira33: string[] = [];
  prateleira34: string[] = [];
  prateleira41: string[] = [];
  prateleira42: string[] = [];
  prateleira43: string[] = [];
  prateleira44: string[] = [];
  paginaAtual: number = 1;
  contador: number = 13;


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length<4){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}

function estoqueLista() {
  var estoque = [];
  for (let index = 1; index <= 50; index++) {
    var listaMed = "Medicamento " + [index];
    estoque.push(listaMed)
 }
 return estoque;
}

export class Campanha {
  estoque = estoqueLista();
  prateleira11: string[] = [];
  prateleira12: string[] = [];
  prateleira13: string[] = [];
  prateleira14: string[] = [];
  prateleira21: string[] = [];
  prateleira22: string[] = [];
  prateleira23: string[] = [];
  prateleira24: string[] = [];
  prateleira31: string[] = [];
  prateleira32: string[] = [];
  prateleira33: string[] = [];
  prateleira34: string[] = [];
  prateleira41: string[] = [];
  prateleira42: string[] = [];
  prateleira43: string[] = [];
  prateleira44: string[] = [];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length<4){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else if (event.container.id != 'estoquelist'){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
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

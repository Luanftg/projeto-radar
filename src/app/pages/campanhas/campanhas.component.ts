
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
// import { ICampanha } from 'src/app/shared/models/campanha.interface';
// import { CampanhaRequestService } from 'src/app/shared/request/campanhas.service';
import { Component, OnInit } from '@angular/core';
// import { mergeMap, take, finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProdutosModalComponent } from '../modais/produtos/delete-produtos-modal/delete-produtos-modal.component';
import { ICampanha } from 'src/app/shared/models/campanha.interface';
import { Prateleira } from 'src/app/services/Prateleira';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.component.html',
  styleUrls: ['./campanhas.component.css']
})
export class CampanhasComponent implements OnInit {

  constructor(
    // private campanhasRequest: CampanhasRequestService,
    private modalService: NgbModal,) {
    
  }

  ngOnInit(): void {
    this.carregarCampanhas()

  }

  campanhas: ICampanha[] = []

  carregarCampanhas() {
    /* this.campanhasRequest.getCampanha()
      .pipe(
        take(1), // O take fará com que a gente se DESINSCREVA após o SUBSCRIBE. Quando isso for resolvido 1 vez, vamos se desinscrever.
      )
      .subscribe((response: any) => this.campanhas = <ICampanha[]>response) */
    }

    CreateCampanha() {

    }
  

  deleteCampanha(campanha: ICampanha){
    // const modalRef = this.modalService.open(DeleteCampanhasModalComponent);
    // modalRef.componentInstance.campanha = campanha;
  }
  editCampanha(campanha:ICampanha){
    // Prateleira.prateleira=campanha;
  }
}

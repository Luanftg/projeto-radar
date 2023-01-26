import { FormBuilder } from '@angular/forms';
import { ICampanha, ICampanhaForm } from 'src/app/shared/models/campanha.interface';
import { CampanhasRequestService } from 'src/app/shared/request/campanhas.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap, take, finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Prateleira } from 'src/app/services/Prateleira';
import { DeleteCampanhasModalComponent } from '../modais/campanhas/delete-campanhas-modal/delete-campanhas-modal.component';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.component.html',
  styleUrls: ['./campanhas.component.css']
})
export class CampanhasComponent implements OnInit {

  constructor(
    private campanhasRequest: CampanhasRequestService,
    private modalService: NgbModal,
    ) {
    
  }
  ngOnInit(): void {
    this.carregarCampanhas()

  }
  
  termoBuscar: string = "";
  campanhas: ICampanha[] = []

  carregarCampanhas() {
    this.campanhasRequest.getCampanha()
      .pipe(
        take(1), // O take fará com que a gente se DESINSCREVA após o SUBSCRIBE. Quando isso for resolvido 1 vez, vamos se desinscrever.
      )
      .subscribe((response: any) => this.campanhas = <ICampanha[]>response)
    }

  editCampanha(campanha:ICampanha){
    Prateleira.campanha=campanha;
  }

   

  deleteCampanha(campanha: ICampanha){
    const modalRef = this.modalService.open(DeleteCampanhasModalComponent);
    modalRef.componentInstance.campanha = campanha;
    modalRef.dismissed.subscribe(()=>{
      this.campanhas=[]
      this.carregarCampanhas();
    })
  }
}

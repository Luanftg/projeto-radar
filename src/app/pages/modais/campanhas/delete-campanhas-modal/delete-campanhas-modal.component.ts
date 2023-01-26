import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { ICampanha } from 'src/app/shared/models/campanha.interface';
import { CampanhasRequestService } from 'src/app/shared/request/campanhas.service';

@Component({
  selector: 'app-campanhas-campanhas-modal',
  templateUrl: './delete-campanhas-modal.component.html',
  styleUrls: ['./delete-campanhas-modal.component.css']
})
export class DeleteCampanhasModalComponent {
  @Input() campanha!:ICampanha;
  constructor(
    private request: CampanhasRequestService,
    public activeModal: NgbActiveModal,
  ) { }
  delete ():void{
    this.request.deleteCampanha(this.campanha.id)
      .pipe(take(1))
      .subscribe(()=>
      this.activeModal.dismiss());
  }
}

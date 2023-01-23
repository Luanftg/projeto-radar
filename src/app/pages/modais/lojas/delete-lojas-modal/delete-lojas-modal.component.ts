import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { ILoja } from 'src/app/shared/models/loja.interface';
import { LojasRequestService } from 'src/app/shared/request/lojas.service';

@Component({
  selector: 'app-delete-lojas-modal',
  templateUrl: './delete-lojas-modal.component.html',
  styleUrls: ['./delete-lojas-modal.component.css']
})
export class DeleteLojasModalComponent {
  @Input() loja!:ILoja;
  constructor(
    private request: LojasRequestService,
    public activeModal: NgbActiveModal,
  ) { }
  delete ():void{
    this.request.deleteLoja(this.loja.id)
      .pipe(take(1))
      .subscribe()
    this.activeModal.dismiss();
    window.location.replace("/lojas");
  }
}

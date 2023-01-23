import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { ILojaForm } from 'src/app/shared/models/loja.interface';
import { LojasRequestService } from 'src/app/shared/request/lojas.service';

@Component({
  selector: 'app-edit-lojas-modal',
  templateUrl: './edit-lojas-modal.component.html',
  styleUrls: ['./edit-lojas-modal.component.css']
})
export class EditLojasModalComponent {
  @Input() lojaForm!:ILojaForm;
  constructor(
    public activeModal: NgbActiveModal,
    public request:LojasRequestService,
  ) { }
  edit(){
    this.request.updateLoja(this.lojaForm.value)
    .pipe(take(1))
    .subscribe()
    this.activeModal.dismiss();
    window.location.replace("/lojas");
  }

}

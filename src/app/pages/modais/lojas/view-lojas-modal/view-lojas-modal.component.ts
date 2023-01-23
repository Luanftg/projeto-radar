import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ILojaForm } from 'src/app/shared/models/loja.interface';

@Component({
  selector: 'app-view-lojas-modal',
  templateUrl: './view-lojas-modal.component.html',
  styleUrls: ['./view-lojas-modal.component.css']
})
export class ViewLojasModalComponent {
  @Input() lojaForm!:ILojaForm;
  constructor(
    public activeModal: NgbActiveModal,
  ) { }
}

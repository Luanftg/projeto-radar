import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IUsuarioForm } from 'src/app/shared/models/usuario.interface';

@Component({
  selector: 'app-view-usuarios-modal',
  templateUrl: './view-usuarios-modal.component.html',
  styleUrls: ['./view-usuarios-modal.component.css']
})
export class ViewUsuariosModalComponent {
@Input() usuarioForm!:IUsuarioForm;
  photoUrl!: string;
  
  constructor(
    public activeModal: NgbActiveModal,
    
  ) {   }
  ngOnInit(): void {
  }
}

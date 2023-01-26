import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IUsuarioForm } from 'src/app/shared/models/usuario.interface';
import { UsuariosRequestService } from 'src/app/shared/request/usuarios.service';

@Component({
  selector: 'app-edit-usuarios-modal',
  templateUrl: './edit-usuarios-modal.component.html',
  styleUrls: ['./edit-usuarios-modal.component.css']
})
export class EditUsuariosModalComponent {
  @Input() usuarioForm!:IUsuarioForm;

  photoUrl!: string | ArrayBuffer | null;
  fotoCarregada!: string;
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
    public request:UsuariosRequestService
  ) { 
  }
  edit(){
    this.request.updateUsuario(this.usuarioForm.value)
    .pipe(take(1))
    .subscribe()
    this.activeModal.dismiss(()=>
    this.activeModal.dismiss());
  }
}

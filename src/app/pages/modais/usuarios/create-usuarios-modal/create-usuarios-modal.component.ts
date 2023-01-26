import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IUsuarioForm } from 'src/app/shared/models/usuario.interface';
import { UsuariosRequestService } from 'src/app/shared/request/usuarios.service';

@Component({
  selector: 'app-create-usuarios-modal',
  templateUrl: './create-usuarios-modal.component.html',
  styleUrls: ['./create-usuarios-modal.component.css']
})
export class CreateUsuariosModalComponent {
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public request: UsuariosRequestService
  ) { }
  usuarioForm = this.fb.group({
    id: [0],
    nome: [''],
    regra: [''],
    email: [''],
    senha: ['']
  }) as IUsuarioForm;
  create() {
    this.request.postUsuario(this.usuarioForm.value)
      .subscribe(()=>
      this.activeModal.dismiss());
  }
}

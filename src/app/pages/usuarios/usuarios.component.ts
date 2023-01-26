import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { IUsuario, IUsuarioForm } from 'src/app/shared/models/usuario.interface';
import { UsuariosRequestService } from 'src/app/shared/request/usuarios.service';
import { CreateUsuariosModalComponent } from '../modais/usuarios/create-usuarios-modal/create-usuarios-modal.component';
import { DeleteUsuariosModalComponent } from '../modais/usuarios/delete-usuarios-modal/delete-usuarios-modal.component';
import { EditUsuariosModalComponent } from '../modais/usuarios/edit-usuarios-modal/edit-usuarios-modal.component';
import { ViewUsuariosModalComponent } from '../modais/usuarios/view-usuarios-modal/view-usuarios-modal.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  constructor(
    private fb: FormBuilder,
    private request: UsuariosRequestService,
    private modalService: NgbModal,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.getUsuario()
  }
  termoBuscar: string = "";
  public usuarios:IUsuario[] = []

 getUsuario() {
    this.request.getUsuario()
      .pipe(take(1))
      .subscribe(list => {
        this.usuarios = <IUsuario[]>list;
      });
  }

  viewUsuario(usuario: IUsuario){
    let usuarioForm = this.fb.group({
      id: [usuario.id],
      nome: [usuario.nome],
      regra: [usuario.regra],
      email: [usuario.email],
      senha: [usuario.senha]
    }) as IUsuarioForm
    const modalRef = this.modalService.open(ViewUsuariosModalComponent);
    modalRef.componentInstance.usuarioForm = usuarioForm;
  }

  createUsuario(){
    this.modalService.open(CreateUsuariosModalComponent);
  }

  
  editUsuario(usuario: IUsuario){
    let usuarioForm = this.fb.group({
      id: [usuario.id],
      nome: [usuario.nome],
      regra: [usuario.regra],
      email: [usuario.email],
      senha: [usuario.senha]
    }) as IUsuarioForm
    const modalRef = this.modalService.open(EditUsuariosModalComponent);
    modalRef.componentInstance.usuarioForm = usuarioForm;
  }
  
  deleteUsuario(usuario: IUsuario){
    const modalRef = this.modalService.open(DeleteUsuariosModalComponent);
    modalRef.componentInstance.usuario = usuario;
  }

}

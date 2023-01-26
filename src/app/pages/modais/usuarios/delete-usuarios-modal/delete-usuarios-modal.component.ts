import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IUsuario } from 'src/app/shared/models/usuario.interface';
import { UsuariosRequestService } from 'src/app/shared/request/usuarios.service';

@Component({
  selector: 'app-delete-usuarios-modal',
  templateUrl: './delete-usuarios-modal.component.html',
  styleUrls: ['./delete-usuarios-modal.component.css']
})
export class DeleteUsuariosModalComponent {
  @Input() usuario!:IUsuario;
  constructor(
    private request: UsuariosRequestService,
    public activeModal: NgbActiveModal,
  ) { }
  delete ():void{
    this.request.deleteUsuario(this.usuario.id)
      .pipe(take(1))
      .subscribe(()=>
      this.activeModal.dismiss());
  }
}

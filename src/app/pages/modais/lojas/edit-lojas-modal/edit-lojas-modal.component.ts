import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import cep from 'cep-promise';
import { take } from 'rxjs';
import { IEndereco } from 'src/app/shared/models/endereco.interface';
import { ILojaForm } from 'src/app/shared/models/loja.interface';
import { ILojaPost } from 'src/app/shared/models/lojaPost.interface';
import { EnderecoRequestService } from 'src/app/shared/request/endereco.service';
import { LojasRequestService } from 'src/app/shared/request/lojas.service';
import { constroiStaticMapWithMarkes } from 'src/app/shared/Utils/mapsStatic';

@Component({
  selector: 'app-edit-lojas-modal',
  templateUrl: './edit-lojas-modal.component.html',
  styleUrls: ['./edit-lojas-modal.component.css']
})
export class EditLojasModalComponent {
  @Input() lojaForm!:ILojaForm;
  @Input() enderecoId!:number;
  @Input() mapa!:string;
  constructor(
    public activeModal: NgbActiveModal,
    public lojaRequest:LojasRequestService,
    public endRequest:EnderecoRequestService,
  ) { }
  edit(){
    let loja = {
      id: this.lojaForm.value.id,
      nome: this.lojaForm.value.nome,
      enderecoId: this.enderecoId,
    } as ILojaPost;
    this.lojaRequest.updateLoja(loja)
    .pipe(take(1))
    .subscribe(()=>{
      let endereco = {
        ...this.lojaForm.value,
        id: this.enderecoId,
      } as IEndereco;
      this.endRequest.updateEndereco(endereco)
      .pipe(take(1))
      .subscribe(()=>
      this.activeModal.dismiss());
    })
  }

  buscaCEP() {
    this.mapa=""
    cep(this.lojaForm.value.cep)
      .then(res =>{
        this.lojaForm.patchValue({
          logradouro: res.street,
          bairro: res.neighborhood,
          cidade: res.city,
          estado: res.state
        })
      
        let endereco = {} as IEndereco
        endereco.logradouro= res.street,
        endereco.bairro= res.neighborhood,
        endereco.cidade= res.city,
        endereco.estado= res.state
        this.mapa = constroiStaticMapWithMarkes(endereco)
      })
  }

}

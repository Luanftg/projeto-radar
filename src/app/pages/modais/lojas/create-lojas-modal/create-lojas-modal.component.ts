import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { ILojaForm } from 'src/app/shared/models/loja.interface';
import { LojasRequestService } from 'src/app/shared/request/lojas.service';

@Component({
  selector: 'app-create-lojas-modal',
  templateUrl: './create-lojas-modal.component.html',
  styleUrls: ['./create-lojas-modal.component.css']
})
export class CreateLojasModalComponent {
    constructor(
      private fb: FormBuilder,
      public activeModal: NgbActiveModal,
      public request:LojasRequestService,
    ) { }
    listaEstados = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins'
  ]
  lojaForm :ILojaForm = this.fb.group({
    id: [0],
    nome: ['' , [Validators.required, Validators.minLength(3)]],
    cep: [''],
    logradouro:[''],
    numero: [''],
    bairro:[''],
    cidade: [''],
    estado: ['' , Validators.required],
    complemento: ['']
  }) as ILojaForm
  create(){
    this.request.postLoja(this.lojaForm.value);
    this.activeModal.dismiss();
    window.location.replace("/lojas");
  }
}

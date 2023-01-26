import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Prateleira } from 'src/app/services/Prateleira';
import { ICampanha, ICampanhaForm } from 'src/app/shared/models/campanha.interface';

@Component({
  selector: 'app-create-campanha-modal',
  templateUrl: './create-campanha-modal.component.html',
  styleUrls: ['./create-campanha-modal.component.css']
})
export class CreateCampanhaModalComponent implements OnInit{
  constructor(
    public activeModal: NgbActiveModal,
    private fb:FormBuilder,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
      this.getCampanha();
  }

  campanhaForm:ICampanhaForm = this.fb.group({
    id: [0],
    lojaId:[0],
    nome: [" "],
    descricao: [" "],
    dtCriacao: [new Date(Date.now())],
    photoUrl: [" "]
  }) as ICampanhaForm
  getCampanha(){
    if(Prateleira.campanha.id){
      this.campanhaForm = this.fb.group({
        id: [Prateleira.campanha.id],
        lojaId:[Prateleira.campanha.lojaId],
        nome: [Prateleira.campanha.nome],
        descricao: [Prateleira.campanha.descricao],
        dtCriacao: [Prateleira.campanha.dtCriacao],
        photoUrl: [Prateleira.campanha.photoUrl]
      }) as ICampanhaForm
    }
  }
  createCampanha(){
    Prateleira.campanha.descricao=this.campanhaForm.value.descricao
    Prateleira.campanha.dtCriacao=this.campanhaForm.value.dtCriacao
    Prateleira.campanha.lojaId=this.campanhaForm.value.lojaId
    Prateleira.campanha.nome=this.campanhaForm.value.nome
    Prateleira.campanha.photoUrl=""
    Prateleira.save(this.http)
    this.activeModal.dismiss()
  }
}

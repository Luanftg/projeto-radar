import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProdutoForm } from 'src/app/shared/models/produto.interface';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';

@Component({
  selector: 'app-create-produtos-modal',
  templateUrl: './create-produtos-modal.component.html',
  styleUrls: ['./create-produtos-modal.component.css']
})
export class CreateProdutosModalComponent {
  photoUrl!: string | ArrayBuffer | null;
  fotoCarregada!: string;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public request: ProdutosRequestService
  ) { }
  produtoForm = this.fb.group({
    id: [0],
    nome: [''],
    descricao: [''],
    valor: [0],
    qtdEstoque: [0],
    photoUrl: [" "]
  }) as IProdutoForm;
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    this.fotoCarregada = URL.createObjectURL(event.target.files[0]);
    reader.onload = (e) => {
      this.photoUrl = e.target!.result;
      this.produtoForm.controls['photoUrl'].setValue(this.photoUrl);
    };
    reader.readAsDataURL(file);
  }
  create() {
    this.request.postProduto(this.produtoForm.value)
      .subscribe(()=>
      this.activeModal.dismiss());
  }
}

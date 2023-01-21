import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IProduto, IProdutoForm } from 'src/app/shared/models/produto.interface';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';

@Component({
  selector: 'app-edit-produtos-modal',
  templateUrl: './edit-produtos-modal.component.html',
  styleUrls: ['./edit-produtos-modal.component.css']
})
export class EditProdutosModalComponent {
  @Input() produtoForm!:IProdutoForm;
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
    public request:ProdutosRequestService
  ) { 
  }
  edit(){
    this.request.updateProduto(this.produtoForm.value)
    .pipe(take(1))
    .subscribe()
    this.activeModal.dismiss();
    window.location.replace("/produtos");
  }
}

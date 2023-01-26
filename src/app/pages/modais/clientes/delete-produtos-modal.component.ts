import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';

@Component({
  selector: 'app-delete-produtos-modal',
  templateUrl: './delete-produtos-modal.component.html',
  styleUrls: ['./delete-produtos-modal.component.css']
})
export class DeleteProdutosModalComponent {
  @Input() produto!:IProduto;
  constructor(
    private request: ProdutosRequestService,
    public activeModal: NgbActiveModal,
  ) { }
  delete ():void{
    this.request.deleteProduto(this.produto.id)
      .pipe(take(1))
      .subscribe()
    this.activeModal.dismiss();
    window.location.replace("produtos");
  }
}

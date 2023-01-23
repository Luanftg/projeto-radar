import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { IProdutoForm } from 'src/app/shared/models/produto.interface';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';

@Component({
  selector: 'app-edit-produtos-modal',
  templateUrl: './edit-produtos-modal.component.html',
  styleUrls: ['./edit-produtos-modal.component.css']
})
export class EditProdutosModalComponent {
  @Input() produtoForm!:IProdutoForm;

  photoUrl!: string | ArrayBuffer | null;
  fotoCarregada!: string;
  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
    public request:ProdutosRequestService
  ) { 
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      this.photoUrl = e.target!.result;
      this.produtoForm.controls['photoUrl'].setValue(this.photoUrl);
    };
    reader.readAsDataURL(file);
  }
  edit(){
    this.request.updateProduto(this.produtoForm.value)
    .pipe(take(1))
    .subscribe()
    this.activeModal.dismiss();
    setTimeout(function () {
      window.location.replace("produtos"); //will redirect to your blog page (an ex: blog.html)
   }, 500);
  }
}

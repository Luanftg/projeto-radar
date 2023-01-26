import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdutosModalComponent } from './delete-produtos-modal.component';

describe('DeleteProdutosModalComponent', () => {
  let component: DeleteProdutosModalComponent;
  let fixture: ComponentFixture<DeleteProdutosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProdutosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProdutosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

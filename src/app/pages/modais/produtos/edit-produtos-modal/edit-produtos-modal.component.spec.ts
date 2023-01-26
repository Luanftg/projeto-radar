import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdutosModalComponent } from './edit-produtos-modal.component';

describe('EditProdutosModalComponent', () => {
  let component: EditProdutosModalComponent;
  let fixture: ComponentFixture<EditProdutosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProdutosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProdutosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

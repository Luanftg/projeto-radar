import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePedidosModalComponent } from './delete-pedidos-modal.component';

describe('DeletePedidosModalComponent', () => {
  let component: DeletePedidosModalComponent;
  let fixture: ComponentFixture<DeletePedidosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePedidosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePedidosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

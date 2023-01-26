import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClientesModalComponent } from './delete-clientes-modal.component';

describe('DeleteClientesModalComponent', () => {
  let component: DeleteClientesModalComponent;
  let fixture: ComponentFixture<DeleteClientesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClientesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientesModalComponent } from './create-clientes-modal.component';

describe('CreateClientesModalComponent', () => {
  let component: CreateClientesModalComponent;
  let fixture: ComponentFixture<CreateClientesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClientesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

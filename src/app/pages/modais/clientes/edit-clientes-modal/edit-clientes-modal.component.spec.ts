import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientesModalComponent } from './edit-clientes-modal.component';

describe('EditClientesModalComponent', () => {
  let component: EditClientesModalComponent;
  let fixture: ComponentFixture<EditClientesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

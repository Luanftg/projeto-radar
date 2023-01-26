import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsuariosModalComponent } from './delete-usuarios-modal.component';

describe('DeleteUsuariosModalComponent', () => {
  let component: DeleteUsuariosModalComponent;
  let fixture: ComponentFixture<DeleteUsuariosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUsuariosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUsuariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

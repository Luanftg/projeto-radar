import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsuariosModalComponent } from './edit-usuarios-modal.component';

describe('EditUsuariosModalComponent', () => {
  let component: EditUsuariosModalComponent;
  let fixture: ComponentFixture<EditUsuariosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsuariosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsuariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

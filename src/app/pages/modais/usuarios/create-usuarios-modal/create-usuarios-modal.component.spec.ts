import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsuariosModalComponent } from './create-usuarios-modal.component';

describe('CreateUsuariosModalComponent', () => {
  let component: CreateUsuariosModalComponent;
  let fixture: ComponentFixture<CreateUsuariosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsuariosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUsuariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

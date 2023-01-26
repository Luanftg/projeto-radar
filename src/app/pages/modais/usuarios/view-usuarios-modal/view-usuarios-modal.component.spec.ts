import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsuariosModalComponent } from './view-usuarios-modal.component';

describe('ViewUsuariosModalComponent', () => {
  let component: ViewUsuariosModalComponent;
  let fixture: ComponentFixture<ViewUsuariosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsuariosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsuariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLojasModalComponent } from './edit-lojas-modal.component';

describe('EditLojasModalComponent', () => {
  let component: EditLojasModalComponent;
  let fixture: ComponentFixture<EditLojasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLojasModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLojasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

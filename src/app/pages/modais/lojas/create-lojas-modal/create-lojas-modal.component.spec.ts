import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLojasModalComponent } from './create-lojas-modal.component';

describe('CreateLojasModalComponent', () => {
  let component: CreateLojasModalComponent;
  let fixture: ComponentFixture<CreateLojasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLojasModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLojasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

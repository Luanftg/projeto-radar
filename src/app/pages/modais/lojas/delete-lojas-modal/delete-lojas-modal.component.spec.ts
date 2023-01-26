import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLojasModalComponent } from './delete-lojas-modal.component';

describe('DeleteLojasModalComponent', () => {
  let component: DeleteLojasModalComponent;
  let fixture: ComponentFixture<DeleteLojasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLojasModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLojasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

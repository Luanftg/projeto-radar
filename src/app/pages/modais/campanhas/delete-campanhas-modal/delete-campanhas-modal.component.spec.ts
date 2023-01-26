import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampanhasModalComponent } from './delete-campanhas-modal.component';

describe('DeleteCampanhasModalComponent', () => {
  let component: DeleteCampanhasModalComponent;
  let fixture: ComponentFixture<DeleteCampanhasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCampanhasModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCampanhasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

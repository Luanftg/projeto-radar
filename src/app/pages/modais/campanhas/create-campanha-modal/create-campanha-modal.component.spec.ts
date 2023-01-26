import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampanhaModalComponent } from './create-campanha-modal.component';

describe('CreateCampanhaModalComponent', () => {
  let component: CreateCampanhaModalComponent;
  let fixture: ComponentFixture<CreateCampanhaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCampanhaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCampanhaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

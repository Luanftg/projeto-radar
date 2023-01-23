import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrateleiraModalComponent } from './save-prateleira-modal.component';

describe('ViewPrateleiraModalComponent', () => {
  let component: ViewPrateleiraModalComponent;
  let fixture: ComponentFixture<ViewPrateleiraModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrateleiraModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPrateleiraModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

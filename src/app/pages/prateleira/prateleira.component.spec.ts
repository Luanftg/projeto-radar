import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrateleiraComponent } from './prateleira.component';

describe('PrateleiraComponent', () => {
  let component: PrateleiraComponent;
  let fixture: ComponentFixture<PrateleiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrateleiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrateleiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

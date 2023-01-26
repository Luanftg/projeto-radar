import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLojasModalComponent } from './view-lojas-modal.component';

describe('ViewLojasModalComponent', () => {
  let component: ViewLojasModalComponent;
  let fixture: ComponentFixture<ViewLojasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLojasModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLojasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

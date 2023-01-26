import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientesModalComponent } from './view-clientes-modal.component';

describe('ViewClientesModalComponent', () => {
  let component: ViewClientesModalComponent;
  let fixture: ComponentFixture<ViewClientesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClientesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

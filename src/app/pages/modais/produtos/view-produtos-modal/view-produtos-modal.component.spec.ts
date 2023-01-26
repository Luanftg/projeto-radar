import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProdutosModalComponent } from './view-produtos-modal.component';

describe('ViewProdutosModalComponent', () => {
  let component: ViewProdutosModalComponent;
  let fixture: ComponentFixture<ViewProdutosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProdutosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProdutosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

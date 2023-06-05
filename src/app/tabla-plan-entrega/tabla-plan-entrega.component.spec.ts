import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPlanEntregaComponent } from './tabla-plan-entrega.component';

describe('TablaPlanEntregaComponent', () => {
  let component: TablaPlanEntregaComponent;
  let fixture: ComponentFixture<TablaPlanEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPlanEntregaComponent]
    });
    fixture = TestBed.createComponent(TablaPlanEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

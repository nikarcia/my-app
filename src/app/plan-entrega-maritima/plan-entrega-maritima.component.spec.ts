import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEntregaMaritimaComponent } from './plan-entrega-maritima.component';

describe('PlanEntregaMaritimaComponent', () => {
  let component: PlanEntregaMaritimaComponent;
  let fixture: ComponentFixture<PlanEntregaMaritimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanEntregaMaritimaComponent]
    });
    fixture = TestBed.createComponent(PlanEntregaMaritimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

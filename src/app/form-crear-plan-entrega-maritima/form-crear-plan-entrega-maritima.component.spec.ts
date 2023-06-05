import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearPlanEntregaMaritimaComponent } from './form-crear-plan-entrega-maritima.component';

describe('FormCrearPlanEntregaMaritimaComponent', () => {
  let component: FormCrearPlanEntregaMaritimaComponent;
  let fixture: ComponentFixture<FormCrearPlanEntregaMaritimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCrearPlanEntregaMaritimaComponent]
    });
    fixture = TestBed.createComponent(FormCrearPlanEntregaMaritimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

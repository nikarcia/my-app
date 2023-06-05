import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearBodegaTerrestreComponent } from './form-crear-bodega-terrestre.component';

describe('FormCrearBodegaTerrestreComponent', () => {
  let component: FormCrearBodegaTerrestreComponent;
  let fixture: ComponentFixture<FormCrearBodegaTerrestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCrearBodegaTerrestreComponent]
    });
    fixture = TestBed.createComponent(FormCrearBodegaTerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

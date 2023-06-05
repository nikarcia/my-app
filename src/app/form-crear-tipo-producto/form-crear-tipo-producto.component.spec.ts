import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearTipoProductoComponent } from './form-crear-tipo-producto.component';

describe('FormCrearTipoProductoComponent', () => {
  let component: FormCrearTipoProductoComponent;
  let fixture: ComponentFixture<FormCrearTipoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCrearTipoProductoComponent]
    });
    fixture = TestBed.createComponent(FormCrearTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

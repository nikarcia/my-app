import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBodegaTerrestreComponent } from './tabla-bodega-terrestre.component';

describe('TablaBodegaTerrestreComponent', () => {
  let component: TablaBodegaTerrestreComponent;
  let fixture: ComponentFixture<TablaBodegaTerrestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaBodegaTerrestreComponent]
    });
    fixture = TestBed.createComponent(TablaBodegaTerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

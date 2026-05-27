import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresaValor } from './ingresa-valor';

describe('IngresaValor', () => {
  let component: IngresaValor;
  let fixture: ComponentFixture<IngresaValor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresaValor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresaValor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

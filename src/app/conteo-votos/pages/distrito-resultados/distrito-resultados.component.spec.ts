import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoResultadosComponent } from './distrito-resultados.component';

describe('DistritoResultadosComponent', () => {
  let component: DistritoResultadosComponent;
  let fixture: ComponentFixture<DistritoResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistritoResultadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistritoResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
